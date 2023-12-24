var shopping_cart = [];
var shopping_cart_total = 0;

//NOTE 추상화 벽 외부 3층
document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    const name = getElementTextContent(target.parentNode, '.menu-name');
    const category = getElementTextContent(target.parentNode, '.category');
    const price = getElementTextContent(target.parentNode, '.price');

    add_item_to_cart(shopping_cart, { name, category, price });
    shopping_cart_total = calc_cart_total(shopping_cart);
    set_cart_total_dom(shopping_cart_total);
    update_shipping_icons(shopping_cart, shopping_cart_total);
    update_tax_dom(shopping_cart_total);
  }),
);


//NOTE 추상화 벽 외부 2층
function add_item_to_cart(cart, item) {
  cart.push(item);
  console.log(cart);
}

function calc_cart_total(cart) {
  let result = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    result += getPriceValue(item.price);
  }
  return result;
}

function set_cart_total_dom(total) {
  setElementTextContent(document, '.total-price', total);
}

function update_shipping_icons(cart, total) {
  var buy_buttons = get_buy_buttons_dom(cart);
  for (var i = 0; i < buy_buttons.length; i++) {
    var item = buy_buttons[i];
    console.log(item);
    if (getPriceValue(item.price) + total >= 20000) item.show_free_shopping_icon();
    else item.hide_free_shopping_icon();
  }
}

function update_tax_dom(total) {
  const TAX = 0.1;
  set_tax_dom(total * (1 - TAX));
}


//NOTE 추상화 벽 외부 1층
function get_buy_buttons_dom(cart) {
  var buttons = [];

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    item.show_free_shopping_icon = function () {
      console.log('DOM 의 아이콘을 보여줍니다');
    };
    item.hide_free_shopping_icon = function () {
      console.log('DOM 의 아이콘을 숨깁니다');
    };
    buttons.push(item);
  }

  return buttons;
}

function set_tax_dom(value) {
  setElementTextContent(document, '.total-price', value);
}


//NOTE 추상화 벽
function getTotalPrice(cart) {
  return getTotalByKey(cart, 'price');
}

function getElementTextContent(rootNode, selector) {
  return rootNode.querySelector(selector).textContent;
}

function setElementTextContent(rootNode, selector, newText) {
  rootNode.querySelector(selector).textContent = newText;
}

function getPriceValue(price) {
  return Number(price.replaceAll('원', '').replaceAll(',', ''))
}

//NOTE 추상화 벽 내부
function getValue(item, key) {
  return item[key];
}

function addItemInArray(array, item) {
  //TODO 불변성 필요
  return array.push(item);
}

function getTotalByKey(array, key) {
  return array.reduce((total, item) => total + getValue(item, key), 0);
}

