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
    var order = ["Table " + table, "2, Burger", "1, Soup"];
    displayNewOrder(order);
	table++;
}

function displayNewOrder(order) {
    var pointer = document.getElementById('ongoing');
    var div     = document.createElement('div');
    div.setAttribute('class', 'orderClass');
    div.append(order[0]); // the TABLE#
    div.append(createButton());
    for(var i=1; i < order.length; i++) {
        div.append(order[i]); // the FOOD
    }
    pointer.appendChild(div);
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
