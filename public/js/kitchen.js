'use strict';

var vue, socket, ioStatusView;

// ***************************

function kitchenPageLoaded() {
    displayItems();

	vue = new Vue({
		el: '#knapp',
		methods: {
			send: function() {
				sendOrder();
			},
			ready: function() {
				changeRdy();
			}
		}
	});

	ioStatusView = function() {
		/*
		 * 0 Connecting...
		 * 1 Connected
		 * 2 Disconnected
		 */
		var status = 0;

		var view = document.getElementById("connectionStatus");
		var timeout;

		var connected = function() {
			view.style.display = "";
			status = 1;
			view.className = "connectionStatusConnected";
			view.innerText = "Connected";
			timeout = window.setTimeout(function() {
				view.style.display = "none";
			}, 3000);
		};

		var disconnected = function() {
			clearTimeout(timeout);
			view.style.display = "";
			status = 2;
			view.className = "connectionStatusDisconnected";
			view.innerText = "Disconnected";
		};

		return {
			connected: connected,
			disconnected: disconnected
		};
	}();

	socket = io();

	socket.addEventListener('connect', function(socket) {
		ioStatusView.connected();
	});

	socket.addEventListener('disconnect', function() {
		ioStatusView.disconnected();
	});

	socket.on('initialize', function(data) {
		loadMenu(data.labelsAndMenu.menu);

		orders.updateOrders(Order.copyAll(data.orders));
		updateAllOrderViews();
		window.debug = data.labelsAndMenu;
		// TODO handle data.labelsAndMenu
	});

	socket.on('currentQueue', function(newOrders) {
		orders.updateOrders(Order.copyAll(newOrders));
		updateAllOrderViews();
	});

	socket.on('orderAdded', function(data) {
		var order = Order.copy(data.order);
		orders.addOrder(order, data.id);
		var view = createOrderView(order);
		insertOrderView(view);
	});

	socket.on('statusChanged', function(data) {
		console.log('Status of order ' + data.id + ' changed to ' + data.status);

		orders.changeStatus(data.id, data.status);
		updateAllOrderViews(); // TODO optimize
	});

	socket.emit('initialize');

	window.setInterval(updateFoodTimes, 1000);
};

// ***************************

function displayItems() {
	displayButton('knapp', "Send order from bar");
};

// **********
function displayButton(id, txt) {
	var button	= document.getElementById(id);
	button.append(txt);
};

window.addEventListener("load", kitchenPageLoaded);

// ***************************
var table = 0;

function sendOrder() {
	var order = new Order(table, [new OrderItem(0, 1, ["no onion"])], new Date().getTime());

	socket.emit('order', order);

	table++;
};

function createOrderView(order) {
	var templateItems = [];

	order.orderItems.forEach(function(orderItem) {
		if(orderItem.specials) {
			var specialViews = [];

			orderItem.specials.forEach(function(special) {
				specialViews.push(special);
			});

			templateItems.push(templater.create(
				"orderItem",
				{
					text: orderItem.count + " " + items[orderItem.id].name,
					specials: specialViews
				}
			));
		} else {
			templateItems.push(templater.create(
				"orderItem",
				{
					text: orderItem.count + " " + items[orderItem.id].name
				}
			));
		}
	});

	var view = templater.create(
		"order",
		{
			order: order,
			table: order.table,
			items: templateItems
		}
	);

	var button = templater.getNode(view, "button");
	button.className = "orderButton orderButton" + order.status;
	button.addEventListener(
		"click", function(e) {
			var order = templater.getData(e.target, "order");

			socket.emit('statusChanged',
						{
							id: orders.idOf(order),
							status: order.status == 4 ? 1 : order.status + 1
						});

			/* order.status++;

			if(order.status == OrderStatus.Finished + 1) {
				order.status = OrderStatus.Added;
			}
			insertOrderView(templater.getRootNode(e.target));

			e.target.className = "orderButton orderButton" + order.status;*/
		}
	);

	return view;
};

function insertOrderView(view) {
	var order = templater.getData(view, "order");
	var list;

	if(order.status == OrderStatus.Delivered) {
		list = document.getElementById("delivered");
	} else if(order.status == OrderStatus.Finished) {
		list = document.getElementById("completed");
	} else {
		list = document.getElementById("ongoing");
	}

	for(var i = 0; i < list.children.length; i++) {
		var listOrder = templater.getData(list.children[i], "order");

		if(listOrder.time > order.time) {
			list.children[i].insertAdjacentElement("beforebegin", view);
			return;
		}
	}

	list.appendChild(view);
};

function updateFoodTimes() {
	var now = new Date();

	function updateTime(node) {
		var order = templater.getData(node, "order");

		templater.setVariable(node, "time", order.getTimeAgoAdded());
	};

	document.getElementById("ongoing").children.forEach(updateTime);
	document.getElementById("completed").children.forEach(updateTime);
	document.getElementById("delivered").children.forEach(updateTime);
};

function updateAllOrderViews() {
	function removeView(child) {
		child.remove();
	};

	document.getElementById("ongoing").children.forEach(removeView);
	document.getElementById("completed").children.forEach(removeView);
	document.getElementById("delivered").children.forEach(removeView);

	orders.getAll().forEach(function(order) {
		var view = createOrderView(order);

		insertOrderView(view);
	});
};

// ---------- //

if(!HTMLCollection.prototype.forEach) {
	HTMLCollection.prototype.forEach = function(func) {
		var children = [];

		for(var i = 0; i < this.length; i++) {
			children.push(this[i]);
		}

		children.forEach(func);
	};
}

// --------- //

function showDelivered() {
	document.getElementById('deliveredDialog').style.display = '';
};

function dismissDelivered(e) {
	console.log(e);
	var dialog = document.getElementById('deliveredDialog');
	var dialogClose = document.getElementById('deliveredCloseButton');
	if(e.target == dialog || e.target == dialogClose) {
		dialog.style.display = 'none';
	}
};
