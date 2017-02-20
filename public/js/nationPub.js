function docLoaded(fn){
  if(document.readyState !== 'loading'){
    console.log("hejsan!");
    fn();
  } else{
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function choose(clicked_id){
  return function() {
    var order = document.createElement('div');
    console.log(clicked_id);
    order.append(document.getElementById(clicked_id).name);
    //order.append(document.getElementById(clicked_id).value);    
    document.getElementById("order").appendChild(order);
    console.log("i choose funktionen");
  }
}

function indexPageLoaded() {
  console.log("Du är i funktionen hello.");
  displayDrinks();
  displayFoods();
  displayOrder();
}

function createButton(img, name, id, price){
  var button = document.createElement('button');
  button.setAttribute('type', 'button');
  var item = document.createElement('img');
  item.setAttribute('src', img);
  item.setAttribute('width', '150px');
  item.setAttribute('height', '150px');
  item.setAttribute('name', name);
  item.setAttribute('value', price);
  item.setAttribute('id', id);
  button.addEventListener('click', choose(id));
  button.appendChild(item);
  return button;
  
}


function displayDrinks(){
  var el = document.getElementById("drink");
  var tr1 = document.createElement('TR');
  el.appendChild(tr1);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  var txt = document.createTextNode('Lager');
  th.appendChild(txt);
  var th3 = document.createElement('TH');
  tr1.appendChild(th3);
  var txt = document.createTextNode('Ipa');
  th3.appendChild(txt);
  var th1 = document.createElement('TH');
  tr1.appendChild(th1);
  var txt1 = document.createTextNode('Cider');
  th1.appendChild(txt1);
  var th2 = document.createElement('TH');
  tr1.appendChild(th2);
  var txt2 = document.createTextNode('Soda');
  th2.appendChild(txt2);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  

  

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.spendrups.se/globalassets/inriver/resources/granges.jpg?format=jpg', 'Gränges', 'buttons1', '29kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://theyearinbeer.files.wordpress.com/2012/07/brooklyn-east-india-pale-ale.jpeg?w=240', 'East india', 'buttons2', '37kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/062015/somersby_logo_2012_vertical.png?itok=5V3xNtOD', 'Somersby', 'buttons3', '29kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://www.cocacola.se/content/dam/GO/CokeZone/Common/global/logo/logodesktop/coca-cola-logo-260x260.png', 'Coca-cola', 'buttons4', '25kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Brookylnbrewery.svg/215px-Brookylnbrewery.svg.png', 'Brooklyn lager', 'buttons5', '37kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://upload.wikimedia.org/wikipedia/en/6/66/Large_brewdog-logo.gif', 'Brew dog', 'buttons6', '39kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://s-media-cache-ak0.pinimg.com/736x/02/e3/49/02e3490373bf3571648d8005a7637895.jpg', 'Strongbow', 'buttons7', '32kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Fanta_logo_global.svg/200px-Fanta_logo_global.svg.png', 'Fanta', 'buttons8', '25kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://capdesign.se/wp-content/uploads/2012/01/2226368534.jpg', 'Falcon', 'buttons9', '31kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://itsjustadogbook.files.wordpress.com/2012/01/lagunitas-beer-dog-logo2.jpg', 'Langunitas', 'buttons10', '37kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://thornabysportsandleisure.com/wp-content/uploads/2013/02/Woodpecker-Premium-Logo.jpg', 'Woodpecker', 'buttons11', '37kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://image.jimcdn.com/app/cms/image/transf/none/path/safbe48c5383f651b/image/i86894699fc676d37/version/1475519788/image.jpg', 'Sprite', 'buttons12', '25kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);


}

function displayFoods(){


  var el = document.getElementById("food");
  var tr1 = document.createElement('TR');
  el.appendChild(tr1);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  var txt = document.createTextNode('Burgers');
  th.appendChild(txt);
  var th1 = document.createElement('TH');
  tr1.appendChild(th1);
  var txt1 = document.createTextNode('Side dishes');
  th1.appendChild(txt1);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=624%2C624', 'Värmland\'s', 'buttons13', '62kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://i.imgur.com/x81kQWI.png', 'Fries', 'buttons14', '24kr');
  td.appendChild(button);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.max.se/ImageVaultFiles/id_2443/cf_22/Burgers-Halloumi.jpg', 'Halloumi', 'buttons15', '58kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.cleothailand.com/wp-content/uploads/2015/08/Salad.jpg', 'Salad', 'buttons16', '21kr');
  td.appendChild(button);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://cdn.firstwefeast.com/assets/2014/09/wendys-pulled-pork-sandwich.png', 'Pulled pork', 'buttons17', '67kr');
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.albaik.com/media/thumbnail/meal-spotlight-image/be797d1fba47fbf010ac1c9b8f114557/20120722_Garlic-Sauce.png', 'Garlic sauce', 'buttons18', '10kr');
  td.appendChild(button);

}

function displayOrder(pressed){
  var el = document.getElementById("order");
  var tr1 = document.createElement('TR');
  el.appendChild(tr1);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  var txt = document.createTextNode('Current order');
  th.appendChild(txt);
  var tr2 = document.createElement('TR');
  el.appendChild(tr2);




}
