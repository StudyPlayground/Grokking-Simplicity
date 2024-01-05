var shopping_cart = [];
var shopping_cart_total = 0;

// business rule
// cart
// copy on write
// array function

document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    const name = target.parentNode.querySelector('.menu-name').textContent;
    const category = target.parentNode.querySelector('.category').textContent;
    const price = target.parentNode.querySelector('.price').textContent;


  shopping_cart =  add_item_to_cart({ name, category, price },shopping_cart);
  shopping_cart_total =   calc_cart_total(shopping_cart );

  set_cart_total_dom(shopping_cart_total);
  update_shipping_icons(shopping_cart, shopping_cart_total);
  update_tax_dom(shopping_cart_total,shopping_cart_total);
  }),
);

// cart
function add_item_to_cart(item,cart) {
  return add_item(item, cart)
}

// cart
function calc_cart_total(cart) {
  return cart.reduce((total, item) => total + getPrice(item.price), 0);
}


function update_shipping_icons(cart, total) {
  get_buy_buttons_dom(cart,total)

}


function get_buy_buttons_dom(cart) {
  return cart.forEach(item => {
    if (isFreeShipping(item.price, total)) 
      console.log('DOM 의 아이콘을 보여줍니다');
    else 
    console.log('DOM 의 아이콘을 숨깁니다'); 
  });
}

function isFreeShipping(itemPrice, total) {
  return itemPrice + total >= 20;
}

function add_item(item, array) {
  // 불변성 유지
  return [...array, item]
 }
 
 
 function getPrice(price) {
   return parseInt(price.replace(/,|원/g, ''), 10)
 }


// business
function update_tax_dom(total) {
  set_tax_dom(total * 0.1);
}

// business
function set_tax_dom(value) {
  document.querySelector('.total-price').textContent = value;
}

function set_cart_total_dom(total) {
  document.querySelector('.total-price').textContent = total;
}
