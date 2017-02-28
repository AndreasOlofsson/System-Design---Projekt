var vm = new Vue ({
	el: '#knapp',
    methods: {
        send: function() {
            sendOrder()
        },
        ready: function() { // not used
            changeRdy()
        }
    }
})

// ***************************
var table = 1;
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
function changeRdy() {
    console.log("*** changeRdy ***");
    var newParent = document.getElementById('completed');
    var oldParent = document.getElementById('ongoing');

	var btn = this.id;
	console.log("this.id: "+btn);
	var buttons = document.getElementsByName("rdyButton");
	var i=0;
	for (; i < buttons.length;) {
		console.log("buttons[i].id: " + buttons[i].id);
    	if(btn == buttons[i].id)
        	break;
		i++;
	}
	newParent.appendChild(oldParent.childNodes[i]);
}

// ***************************
function createButton () {
    var button= document.createElement('button');
    var img   = document.createElement('img');
    img.setAttribute('src', "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png");
    img.width = "10";
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'rdyButton');
    button.setAttribute('name', 'rdyButton');
	button.setAttribute('id', "btnid:" + table);
    button.addEventListener('click', changeRdy);
    // button.setAttribute('v-on:click', changeRdy);
    button.append(img);
    button.append("ready");
    return button;
}