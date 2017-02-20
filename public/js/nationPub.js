function docLoaded(fn){
  if(document.readyState !== 'loading'){
    console.log("hejsan!");
    fn();
  } else{
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function indexPageLoaded() {
  console.log("Du är i funktionen hello.");
  displayDrinks();
  displayFoods();
  displayOrder();
}

function click(){


}

function displayDrinks(){
  var el = document.getElementById("drink");
  var tr1 = document.createElement('TR');
  el.appendChild(tr1);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  var txt = document.createTextNode('Beer');
  th.appendChild(txt);
  var th1 = document.createElement('TH');
  tr1.appendChild(th1);
  var txt1 = document.createTextNode('Cider');
  th1.appendChild(txt1);
  var th2 = document.createElement('TH');
  tr1.appendChild(th2);
  var txt2 = document.createTextNode('Soda');
  th2.appendChild(txt2);

  

  var tr2 = document.createElement('TR');
  el.appendChild(tr2);
  var td = document.createElement('TD');
  tr2.appendChild(td);
  var button1 = document.createElement('button');
  button1.type = "button";
  var beer1 = document.createElement('img');
  beer1.setAttribute('src', 'http://www.spendrups.se/globalassets/inriver/resources/granges.jpg?format=jpg');
  beer1.setAttribute('width', '200px');
  beer1.setAttribute('name', 'Gränges');
  beer1.setAttribute('id', 'buttons');
  button1.appendChild(beer1);
  td.appendChild(button1);

  var td1 = document.createElement('TD');
  tr2.appendChild(td1);
  var button2 = document.createElement('button');
  button2.type = "button";
  var cider1 = document.createElement('img');
  cider1.setAttribute('src', 'https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/062015/somersby_logo_2012_vertical.png?itok=5V3xNtOD');
  cider1.setAttribute('width', '200px');
  cider1.setAttribute('name', 'Somersby');
  cider1.setAttribute('id', 'buttons');
  button2.appendChild(cider1);
  td1.appendChild(button2);

  var td2 = document.createElement('TD');
  tr2.appendChild(td2);
  var button3 = document.createElement('button');
  button3.type = "button";
  var soda1 = document.createElement('img');
  soda1.setAttribute('src', 'https://www.cocacola.se/content/dam/GO/CokeZone/Common/global/logo/logodesktop/coca-cola-logo-260x260.png');
  soda1.setAttribute('width', '200px');
  soda1.setAttribute('name', 'Coca-cola');
  soda1.setAttribute('id', 'buttons');
  button3.appendChild(soda1);
  td2.appendChild(button3);




  var tr3 = document.createElement('TR');
  el.appendChild(tr3);
  var td3 = document.createElement('TD');
  tr3.appendChild(td3);
  var button4 = document.createElement('button');
  button1.type = "button";
  var beer2 = document.createElement('img');
  beer2.setAttribute('src', 'https://theyearinbeer.files.wordpress.com/2012/07/brooklyn-east-india-pale-ale.jpeg?w=240');
  beer2.setAttribute('width', '200px');
  beer2.setAttribute('name', 'East india');
  beer2.setAttribute('id', 'buttons');
  button4.appendChild(beer2);
  td3.appendChild(button4);

  var td4 = document.createElement('TD');
  tr3.appendChild(td4);
  var button5 = document.createElement('button');
  button5.type = "button";
  var cider2 = document.createElement('img');
  cider2.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/736x/02/e3/49/02e3490373bf3571648d8005a7637895.jpg');
  cider2.setAttribute('width', '200px');
  cider2.setAttribute('name', 'Strongbow');
  cider2.setAttribute('id', 'buttons');
  button5.appendChild(cider2);
  td4.appendChild(button5);

  var td5 = document.createElement('TD');
  tr3.appendChild(td5);
  var button6 = document.createElement('button');
  button6.type = "button";
  var soda2 = document.createElement('img');
  soda2.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Fanta_logo_global.svg/200px-Fanta_logo_global.svg.png');
  soda2.setAttribute('width', '200px');
  soda2.setAttribute('name', 'Fanta');
  soda2.setAttribute('id', 'buttons');
  button6.appendChild(soda2);
  td5.appendChild(button6);
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

  var tr2 = document.createElement('TR');
  el.appendChild(tr2);
  var td = document.createElement('TD');
  tr2.appendChild(td);
  var button1 = document.createElement('button');
  button1.type = "button";
  var burger1 = document.createElement('img');
  burger1.setAttribute('src', 'https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=624%2C624');
  burger1.setAttribute('width', '200px');
  burger1.setAttribute('name', 'Värmlands');
  burger1.setAttribute('id', 'buttons');
  button1.appendChild(burger1);
  td.appendChild(button1);

  var td1 = document.createElement('TD');
  tr2.appendChild(td1);
  var button2 = document.createElement('button');
  button2.type = "button";
  var side1 = document.createElement('img');
  side1.setAttribute('src', 'http://i.imgur.com/x81kQWI.png');
  side1.setAttribute('width', '200px');
  side1.setAttribute('name', 'Pommes frites');
  side1.setAttribute('id', 'buttons');
  button2.appendChild(side1);
  td1.appendChild(button2);

  var tr3 = document.createElement('TR');
  el.appendChild(tr3);
  var td2 = document.createElement('TD');
  tr3.appendChild(td2);
  var button3 = document.createElement('button');
  button3.type = "button";
  var burger2 = document.createElement('img');
  burger2.setAttribute('src', 'http://www.max.se/ImageVaultFiles/id_2443/cf_22/Burgers-Halloumi.jpg');
  burger2.setAttribute('width', '250px');
  burger2.setAttribute('name', 'Halloumi');
  burger2.setAttribute('id', 'buttons');
  button3.appendChild(burger2);
  td2.appendChild(button3);

  var td3 = document.createElement('TD');
  tr3.appendChild(td3);
  var button4 = document.createElement('button');
  button1.type = "button";
  var side2 = document.createElement('img');
  side2.setAttribute('src', 'http://www.cleothailand.com/wp-content/uploads/2015/08/Salad.jpg');
  side2.setAttribute('width', '200px');
  side2.setAttribute('name', 'Sallad');
  side2.setAttribute('id', 'buttons');
  button4.appendChild(side2);
  td3.appendChild(button4);

  var tr4 = document.createElement('TR');
  el.appendChild(tr4);
  var td4 = document.createElement('TD');
  tr4.appendChild(td4);
  var button5 = document.createElement('button');
  button5.type = "button";
  var burger3 = document.createElement('img');
  burger3.setAttribute('src', 'http://cdn.firstwefeast.com/assets/2014/09/wendys-pulled-pork-sandwich.png');
  burger3.setAttribute('width', '270px');
  burger3.setAttribute('name', 'Pulled pork');
  burger3.setAttribute('id', 'buttons');
  button5.appendChild(burger3);
  td4.appendChild(button5);

  var td5 = document.createElement('TD');
  tr4.appendChild(td5);
  var button6 = document.createElement('button');
  button6.type = "button";
  var side3 = document.createElement('img');
  side3.setAttribute('src', 'http://www.albaik.com/media/thumbnail/meal-spotlight-image/be797d1fba47fbf010ac1c9b8f114557/20120722_Garlic-Sauce.png');
  side3.setAttribute('width', '200px');
  side3.setAttribute('name', 'Vitlökssås');
  side3.setAttribute('id', 'buttons');
  button6.appendChild(side3);
  td5.appendChild(button6);
}

function displayOrder(pressed){
  var el = document.getElementById("order");
  var tr1 = document.createElement('TR');
  el.appendChild(tr1);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  var txt = document.createTextNode('Current order');
  th.appendChild(txt);



}
