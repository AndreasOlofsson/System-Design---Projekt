'use strict';

var vue;

// ***************************
function kitchenPageLoaded() { // functions specific to the index.html document
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
}

// ***************************
function displayItems() {
    displayButton('knapp', "Send order from bar");
}

// **********
function displayButton(id, txt) {
    var button  = document.getElementById(id);
    button.append(txt);
}

window.addEventListener("load", kitchenPageLoaded);

// **************************
var table = 1;

function Order(id, table, foods, time) {
	this.id = id;
	this.table = table;
	this.foods = foods;
	this.status = 0;
	this.time = time;
}

function Food(name, count, specials) {
	this.name = name;
	this.count = count || 1;
	this.specials = specials;
}

// ***************************
function sendOrder() {
	var order = new Order(table, table, [new Food("Burger", 2), new Food("Soup", 1)], new Date());

	insertOrderView("ongoing", createOrderView(order));


	table++;
}

function createOrderView(order) {
	var templateItems = [];

	order.foods.forEach(function(food) {
		templateItems.push(templater.create("orderItem", { text: food.count + " " + food.name }));
	});

	var view = templater.create(
		"order",
		{
			order: order,
			table: order.table,
			items: templateItems
		}
	);

	templater.getNode(view, "button").addEventListener(
		"click", function(e) {
			var order = templater.getData(e.target, "order");

			order.status++;

			if(order.status == 2) {
				insertOrderView("completed", templater.getRootNode(e.target));
			} else if(order.status == 3) {
				order.status = 0;
				insertOrderView("ongoing", templater.getRootNode(e.target));
			}

			e.target.className = "orderButton orderButton" + order.status;
		}
	);

	return view;
}

function insertOrderView(side, view) {
	var order = templater.getData(view, "order");
	var list;

	if(side === "completed") {
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
}
