var shopping_cart = [];
var shopping_cart_total = 0;
const TAX = 0.1;

//NOTE 추상화 벽 외부 2층
document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    const name = getElementTextContent(target.parentNode, '.menu-name');
    const category = getElementTextContent(target.parentNode, '.category');
    const price = getElementTextContent(target.parentNode, '.price');

    shopping_cart = add_item_to_cart(shopping_cart, { name, category, price });
    shopping_cart_total = getTotalPrice(shopping_cart);
    set_cart_total_dom(shopping_cart_total);
    update_shipping_icons(get_buy_buttons_dom(shopping_cart), shopping_cart_total);
    set_tax_dom(calculatedTotalByTax(shopping_cart_total, TAX));
    console.log(shopping_cart)
  }),
);

//NOTE 추상화 벽 외부 1층
function add_item_to_cart(cart, item) {
  return addItem(cart, generateItem(item));
}

function set_cart_total_dom(total) {
  setElementTextContent(document, '.total-price', total);
}

function update_shipping_icons(buy_buttons, total) {
  doSomethingWithItem(buy_buttons, (item) => {
    if (getPriceNumber(getValue(item, 'price')) + total >= 20000){
      item.show_free_shopping_icon();
    }
    else {
      item.hide_free_shopping_icon();
    }
  })
}

function get_buy_buttons_dom(cart) {
  return doSomethingWithItem(cart, (item) => {
    item.show_free_shopping_icon = function () {
      console.log(`${getValue(item, 'name')} / ${getValue(item, 'price')} / DOM 의 아이콘을 보여줍니다`);
    };
    item.hide_free_shopping_icon = function () {
      console.log(`${getValue(item, 'name')} / ${getValue(item, 'price')} / DOM 의 아이콘을 숨깁니다`);
    };
    return item;
  })
}

function set_tax_dom(value) {
  setElementTextContent(document, '.total-price', value);
}


//NOTE 추상화 벽
function getTotalPrice(cart) {
  return cart.reduce((total, item) => total + getPriceNumber(getValue(item, 'price')), 0);
}

function getElementTextContent(rootNode, selector) {
  return rootNode.querySelector(selector).textContent;
}

function setElementTextContent(rootNode, selector, newText) {
  rootNode.querySelector(selector).textContent = newText;
}

function getPriceNumber(price) {
  return Number(price.replaceAll('원', '').replaceAll(',', ''))
}

function calculatedTotalByTax(total, tax) {
  return total * (1 - tax);
}

function generateItem({name, category, price}) {
  return {name, category, price}
}

function getValue(item, key) {
  return item[key];
}

function addItem(array, item) {
  //TODO 불변성 필요
  array.push(item);
  return array;
}

function doSomethingWithItem(cart, f) {
  return cart.map(f);
}