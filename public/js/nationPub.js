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
    var i = 0;
    var arr = ['Gränges'];
    for(i; i <= arr.length; i++){
      if(document.getElementById(clicked_id).name === arr[i]){
        console.log("same");
      }
    }
      var order = document.createElement('div');
      var price = document.createElement('div');
      order.append(document.getElementById(clicked_id).name);
      price.append(document.getElementById(clicked_id).value + "kr");
      arr.push(document.getElementById(clicked_id).name);
      document.getElementById("order").appendChild(order);
      document.getElementById("price").appendChild(price);
      console.log(arr);
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
  item.value = price;
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
  var button = createButton('http://www.spendrups.se/globalassets/inriver/resources/granges.jpg?format=jpg', 'Gränges', 'buttons1', 29);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://theyearinbeer.files.wordpress.com/2012/07/brooklyn-east-india-pale-ale.jpeg?w=240', 'East india', 'buttons2', 37);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/062015/somersby_logo_2012_vertical.png?itok=5V3xNtOD', 'Somersby', 'buttons3', 29);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://www.cocacola.se/content/dam/GO/CokeZone/Common/global/logo/logodesktop/coca-cola-logo-260x260.png', 'Coca-cola', 'buttons4', 25);
  td.appendChild(button);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Brookylnbrewery.svg/215px-Brookylnbrewery.svg.png', 'Brooklyn lager', 'buttons5', 37);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://upload.wikimedia.org/wikipedia/en/6/66/Large_brewdog-logo.gif', 'Brew dog', 'buttons6', 39);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.cluverjack.com/wp-content/uploads/2014/11/CJ-logo.png', 'Cluver and Jack', 'buttons7', 32);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.officialpsds.com/images/thumbs/Fanta-Logo-Remade-psd64509.png', 'Fanta', 'buttons8', 25);
  td.appendChild(button);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://capdesign.se/wp-content/uploads/2012/01/2226368534.jpg', 'Falcon', 'buttons9', 31);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://itsjustadogbook.files.wordpress.com/2012/01/lagunitas-beer-dog-logo2.jpg', 'Langunitas', 'buttons10', 37);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://thornabysportsandleisure.com/wp-content/uploads/2013/02/Woodpecker-Premium-Logo.jpg', 'Woodpecker', 'buttons11', 37);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('https://image.jimcdn.com/app/cms/image/transf/none/path/safbe48c5383f651b/image/i86894699fc676d37/version/1475519788/image.jpg', 'Sprite', 'buttons12', 25);
  td.appendChild(button);
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
  var button = createButton('https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=624%2C624', 'Värmland\'s', 'buttons13', 62);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://pngplay.com/wp-content/uploads/2016/07/French-Fries-PNG-9.png', 'Fries', 'buttons14', 24);
  td.appendChild(button);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.max.se/ImageVaultFiles/id_2443/cf_22/Burgers-Halloumi.jpg', 'Halloumi', 'buttons15', 58);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.cleothailand.com/wp-content/uploads/2015/08/Salad.jpg', 'Salad', 'buttons16', 21);
  td.appendChild(button);

  var tr = document.createElement('TR');
  el.appendChild(tr);
  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.zeppelin-restaurant.de/images/Gerichte_freigestellt/pulled_pork_700.png', 'Pulled pork', 'buttons17', 67);
  td.appendChild(button);

  var td = document.createElement('TD');
  tr.appendChild(td);
  var button = createButton('http://www.oporto.co.nz/wp-content/uploads/2015/09/sauce_garlic.102266.png', 'Garlic sauce', 'buttons18', 10);
  td.appendChild(button);

}

function displayOrder(){
  var el = document.getElementById("order");
  var tr1 = document.createElement('TR');
  el.appendChild(tr1);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  var txt = document.createTextNode('Current order');
  th.appendChild(txt);
  var el = document.getElementById("price");
  var tr1 = document.createElement('TR');
  el.appendChild(tr1);
  var th = document.createElement('TH');
  tr1.appendChild(th);
  var txt = document.createTextNode('Price');
  th.appendChild(txt);

}








