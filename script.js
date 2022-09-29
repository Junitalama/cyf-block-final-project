/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/var Productname, productprice, subtotal, images;

// Describe this function...
function addproductToshoppingcart(Productname, productprice) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_shopping_cart = document.getElementById('shopping-cart');
  let new_li = document.createElement('li');
  let new_span = document.createElement('span');
  new_span.innerText = Productname;

  new_li.appendChild(new_span);
  let new_span2 = document.createElement('span');
  new_span2.innerText = 'price £';

  new_li.appendChild(new_span2);
  let new_span3 = document.createElement('span');
  new_span3.innerText = productprice;

  new_li.appendChild(new_span3);

  element_shopping_cart.appendChild(new_li);
  subtotal.push(productprice);
}

// Describe this function...
function updatetotalcost2() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total_amount = document.getElementById('total-amount');
  element_total_amount.replaceChildren();
  let new_span4 = document.createElement('span');
  new_span4.innerText = '£';

  element_total_amount.appendChild(new_span4);
  let new_span5 = document.createElement('span');
  new_span5.innerText = subtotal.reduce((a,b) => a+b, 0);

  element_total_amount.appendChild(new_span5);
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


images = ['https://image.yfswebstatic.com/fit-in/490x490/origin/product/000000000000/611257cf360bf.png', 'https://image.yfswebstatic.com/fit-in/490x490/origin/product/016800003053/62e38d1ae59e6.jpg', 'https://image.yfswebstatic.com/fit-in/950x950/origin/product/016800002536/61597c099329c.JPG', 'https://image.yfswebstatic.com/fit-in/490x490/origin/product/000165001900/611b12bf8262d.JPG', 'https://image.yfswebstatic.com/fit-in/490x490/origin/product/oc/clothing/shooting/62f0b3b991b06.JPG', 'https://image.yfswebstatic.com/fit-in/490x490/origin/product/oc/clothing/shooting/25527b8c9faaddc6af1f86c8cbbedd5a.jpg'];

let element_pics = document.getElementById('pics');
images.push(images[0]);
element_pics.setAttribute("src", images.shift());


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  images.unshift(images.slice(-1)[0]);
  element_pics2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pics3 = document.getElementById('pics');
  images.push(images[0]);
  element_pics3.setAttribute("src", images.shift());

});
subtotal = [];
updatetotalcost2();

subtotal;


document.getElementById('add-product1').addEventListener('click', (event) => {
  addproductToshoppingcart('babygirl set', 7.5);
  updatetotalcost2();

});

document.getElementById('add-product2').addEventListener('click', (event) => {
  addproductToshoppingcart('wool blend coat ', 10.5);
  updatetotalcost2();

});

document.getElementById('add-product3').addEventListener('click', (event) => {
  addproductToshoppingcart('overall sets', 11.5);
  updatetotalcost2();

});

document.getElementById('add-product4').addEventListener('click', (event) => {
  addproductToshoppingcart('cherry print dress', 12.5);
  updatetotalcost2();

});

document.getElementById('add-product5').addEventListener('click', (event) => {
  addproductToshoppingcart('sweetshirt', 10);
  updatetotalcost2();

});

document.getElementById('add-product6').addEventListener('click', (event) => {
  addproductToshoppingcart('fleece line coat', 15);
  updatetotalcost2();

});

document.getElementById('add-feedback').addEventListener('click', (event) => {
  let element_feedback = document.getElementById('feedback');
  let new_ul = document.createElement('ul');
  new_ul.innerText = getNumberOrString(document.getElementById('input-feedback').value);

  element_feedback.appendChild(new_ul);

});
