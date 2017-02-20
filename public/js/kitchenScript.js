// ** WAIT UNTIL HTML FINISHES LOADING **
function docLoaded(fn) {
    if(document.readyState !== 'loading') {
        fn();// when HTML has completed loading --> run indexPageLoaded() (== fn())
    } else { // if HTML has not completed loading
        document.addEventListener('DOMContentLoaded', fn);
    }
}


// ***************************
function kitchenPageLoaded() { // functions specific to the index.html document
    displayItems();
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
