'use strict';

var vue;
var orderPrototype;

// ***************************
function kitchenPageLoaded() { // functions specific to the index.html document
	orderPrototype = document.getElementById("orderPrototypeContainer").children[0];

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

function Order(id, table, foods) {
	this.id = id;
	this.table = table;
	this.foods = foods;
}

function Food(name, count, specials) {
	this.name = name;
	this.count = count || 1;
	this.specials = specials;
}
// ***************************
function sendOrder() {
	var order = new Order(table, table, [new Food("Burger", 2), new Food("Soup", 1)]);

	document.getElementById("ongoing").appendChild(createOrderView(order));

	table++;
}

function createOrderView(order) {
	var templateItems = [];

	order.foods.forEach(function(food) {
		templateItems.push(templater.create("orderItem", {text: food.count + " " + food.name}));
	});

	return templater.create(
		"order",
		{
			table: order.table,
			items: templateItems,
			changeStatus: function(status) {
				this.orderButton || (this.orderButton = document.getElementsByClassName("orderButton")[0]);

				this.orderButton.className = "orderButton orderButton" + status;
			}
		});
}

// ***************************
function changeRdy(e) {
    console.log("*** changeRdy ***");
    var newParent = document.getElementById('completed');
    var oldParent = document.getElementById('ongoing');

	var btn = e.target;
	newParent.appendChild(btn.parentElement);
}

// ***************************
function createButton() {
    var button= document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'rdyButton');
    button.setAttribute('name', 'rdyButton');
	button.setAttribute('id', "btnid:" + table);
    button.addEventListener('click', changeRdy);
    // button.setAttribute('v-on:click', changeRdy);
    button.append("ready");
    return button;
}
