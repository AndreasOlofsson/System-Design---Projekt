/* jslint node: true */
'use strict';

// Require express, socket.io, and vue
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var fs = require('fs');
var shared = require('./public/js/shared.js');

// Add all members in 'shared.js' to the global context
for(var key in shared) {
    global[key] = shared[key];
}

// Pick arbitrary port
var port = 3000;
app.set('port', (process.env.PORT || port));

// Language should be user specific but default is set here
var lang = "sv";

// get the JSON objects for the dictated language. Wonder if functions take arguments? ;-)
var getLabelsAndMenu = function() {
    var ui = require("./data/"+ lang +"/ui.json");
    var menu = require("./data/"+ lang +"/menu.json");
    return {uiLabels: ui, menu: menu};
};

function readOrdersFromStore() {
	console.log('Reading orders from \'orders.store\'...');
	try {
		var fileContents = fs.readFileSync('orders.store');
		var newOrders = JSON.parse(fileContents);
		newOrders = Order.copyAll(newOrders);
		orders.updateOrders(newOrders);
	} catch(err) {
		if(err instanceof SyntaxError) {
			console.log('store file corrupt!');
			process.exit();
		} else if(err != null && err.code == 'ENOENT') {
			console.log('store not found');
		} else {
			console.log(err);
		}
	}
};

readOrdersFromStore();

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public/')));
// Serve vue from vue/ directory
app.use('/vue', express.static(path.join(__dirname, '/node_modules/vue/dist/')));

// Serve diner.html as root page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/diner.html'));
});
// Serve kitchen.html as subpage
app.get('/kitchen', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/kitchen.html'));
});
// Serve table.html as subpage
app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/tables.html'));
});

loadMenu(getLabelsAndMenu().menu);

// ------ //
var clients = [];

var Client = function(socket) {
    this.socket = socket;

    var thisClient = this;

    socket.on('initialize', function() {
        socket.emit('initialize', {orders: orders.getAll(),
								   labelsAndMenu: getLabelsAndMenu() });
    });

    socket.on('order', function(order) {
		order = Order.copy(order);

		var orderId = orders.addOrder(order);

        console.log('order #' + orderId + ' added: ' + order.toString());

        clients.forEach(function(client) {
            client.orderAdded(orderId, order);
        });
    });

    socket.on('statusChanged', function(data) {
        orders.changeStatus(data.id, data.status);

		console.log('Status of order ' + data.id + ' changed to ' + data.status);

        clients.forEach(function(client) {
            client.orderStatusChanged(data.id, data.status);
        });
    });

    socket.on('updateOrders', function() {
        socket.emit('currentQueue', orders.getAll());
    });
};

Client.prototype.orderAdded = function(id, order) {
    this.socket.emit('orderAdded', { id: id, order: order });
};

Client.prototype.orderStatusChanged = function(id, status) {
    this.socket.emit('statusChanged', {id: id, status: status});
};

io.on('connection', function(socket) {
	  // Send list of orders and text labels when a client connects
    console.log('client connected from: ' + socket.handshake.address);

    clients.push(new Client(socket));
});

http.listen(app.get('port'), function() {
    console.log('Server listening on port ' + app.get('port'));
});

// ------------------ //

function storeOrders() {
	if(orders.getAll().length == 0) {
		try {
			fs.unlinkSync('orders.store');
		} catch(err) {}
	} else {
		console.log('Writing ' + orders.getAll().length + ' orders to \'orders.store\'... ');
		try {
			fs.writeFileSync('orders.store', JSON.stringify(orders.getAll()));
		} catch(err) {
			console.log('failed!');
			console.log(err);
		}
	}
};

setInterval(storeOrders, 1000 * 60); // periodically save all orders every minute

process.on('exit', function() {
	storeOrders();
});
process.on('SIGINT', function() {
	process.exit();
});
