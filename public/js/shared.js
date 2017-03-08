var OrderStatus = {
	Added: 1,
	Cooking: 2,
	Finished: 3,
	Delivered: 4
};

var ItemType = {
	Food: 1,
	Drink: 2,
	SideOrder: 3
};

function Order(table, orderItems, time) {
	this.table = table;
	this.orderItems = orderItems;
	this.status = OrderStatus.Added;
	this.time = time;
}

Order.copy = function(order) {
	var newOrder = new Order(order.table, OrderItem.copyAll(order.orderItems), order.time);
	newOrder.status = order.status;
	return newOrder;
};

Order.copyAll = function(orders) {
	var newOrders = [];

	orders.forEach(function(order) {
		newOrders.push(Order.copy(order));
	});

	return newOrders;
};

Order.prototype.getTimeAgoAdded = function() {
	var sec = Math.floor((new Date().getTime() - this.time) / 1000);
	var timeStr;

	if(sec < 60) {
		timeStr = sec + ' s';
	} else if(sec < 60 * 60) {
		timeStr = Math.floor(sec / 60) + ' m';
	} else {
		timeStr = Math.floor(sec / 60 / 60) + ' h ' + (Math.floor(sec / 60) % 60) + ' m';
	}

	return timeStr + ' ago';
};

Order.prototype.toString = function() {
	var str = 'Order(table: ' + this.table + ', items: ';

	if(this.orderItems.length != 0) {
		str += '[';
		var first = true;
		this.orderItems.forEach(function(item) {
			if(first) {
				first = false;
			} else {
				str += ', ';
			}
			str += item.toString();
		});
		str += ']';
	} else {
		str += 'none';
	}

	str += ', time: ' + this.getTimeAgoAdded() + ')';

	return str;
};

function OrderItem(id, count, specials) {
	this.id = id;
	this.count = count || 1;
	this.specials = specials;
}

OrderItem.copy = function(orderItem) {
	return new OrderItem(
		orderItem.id,
		orderItem.count,
		!orderItem.specials ? undefined : orderItem.specials.slice());
};

OrderItem.copyAll = function(orderItems) {
	var newOrderItems = [];

	orderItems.forEach(function(orderItem) {
		newOrderItems.push(OrderItem.copy(orderItem));
	});

	return newOrderItems;
};

OrderItem.prototype.toString = function() {
	var str = 'OrderItem(name: \'' + items[this.id].name + '\', count: ' + this.count;

	if(this.specials) {
		str += ', specials: [';
		var first = true;
		this.specials.forEach(function(special) {
			if(first) {
				first = false;
			} else {
				str += ', ';
			}

			str += '\'' + special + '\'';
		});
		str += '])';
	} else {
		str += ')';
	}

	return str;
};

function Item(name, price, type) {
	this.name = name;
	this.price = price;
	this.type = type;
}

var orders = function() {
	var orders = [];

	var addOrder = function(order, id) {
		if(!id) {
			orders.push(order);
			return orders.length - 1;
		} else {
			orders[id] = order;
			return id;
		}
	};

	var get = function(id) {
		return orders[id];
	};

	var getAll = function() {
		return orders;
	};

	var idOf = function(order) {
		return orders.indexOf(order);
	};

	var updateOrders = function(newOrders) {
		orders = newOrders;
	};

	var changeStatus = function(orderId, status) {
		if(orders[orderId]) {
			orders[orderId].status = status;
			return true;
		} else {
			return false;
		}
	};

	return {
		addOrder: addOrder,
		get: get,
		getAll: getAll,
		idOf: idOf,
		updateOrders: updateOrders,
		changeStatus: changeStatus
	};
}();

var items = [];

function loadMenu(menu) {
	menu.foods.forEach(function(food) {
		items.push(new Item(food.label, food.price, ItemType.Food));
	});

	menu.drinks.forEach(function(drink) {
		items.push(new Item(drink.label, drink.price, ItemType.Drink));
	});

	menu.sideorders.forEach(function(sideOrder) {
		items.push(new Item(sideOrder.label, sideOrder.price, ItemType.SideOrder));
	});
};

// Export functions and variables for node.js
if(typeof(exports) != "undefined") {
	exports.OrderStatus = OrderStatus;
	exports.ItemType = ItemType;
	exports.Order = Order;
	exports.OrderItem = OrderItem;
	exports.Item = Item;

	exports.loadMenu = loadMenu;

	exports.orders = orders;
	exports.items = items;
};
