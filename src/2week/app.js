import ShoppingCart from "./cart.js";


const {cartGetter: getCart, cartTotalGetter: getCartTotal, cartSetter: setCart} = ShoppingCart()


const cartLayer = document.getElementById('cart-layer');
const cartIcon = document.querySelector('.carts>.icons');
const productList = document.querySelector('.items');


cartIcon.addEventListener('click', () => {
  show_dom(cartLayer);
  set_cart_list_dom();
});

cartLayer.addEventListener('click', (e) => {
  if (e.target !== cartLayer) return;
  hide_dom(cartLayer);
});


function set_cart_list_dom() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = getCart().map(
      (item) => `
        <div class='cart-item'>
        <span class='category'>${item.category}</span>
          <h3 class='name'>${item.name}</h3>
          <p class='price'>${formatNumberToCurrency(item.price)}</p>
        </div>
        `
    )
    .join('');
}

function get_dom_text (className, target = document){
return target.querySelector(`${className}`).textContent;
}

function get_dom_num (className, target = document){
  return formatToNumber(target.querySelector(`${className}`).textContent);
}

const ITEM_STRING =['name', 'category'];
const ITEM_NUMBER = ['price']

function make_cart_item(keys,target = document){
  const cartItem = {}
  keys.forEach(key => {
    if( ITEM_STRING.includes(key)){
      cartItem[key] = get_dom_text(key,target)
    }else{
      cartItem[key] = get_dom_num(key, target)
    }
  })
  return cartItem;
}


productList.querySelectorAll('.add-to-cart').forEach((button) =>
  button.addEventListener('click', ({ target }) => {
    const name = get_dom_text('name', target.parentNode);
    const category = get_dom_text('category', target.parentNode);
    const price = get_dom_num('price', target.parentNode);

    setCart('add', {name, category, price})
    update_shipping_icons_dom(getCartTotal());
    set_total_price_dom(getCartTotal());
    })
);

function set_total_price_dom(total) {
  document.querySelector('.total-price').textContent =
    formatNumberToCurrency(total+calc_tax(total));
}

function update_shipping_icons_dom(total) {
  const buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((btn)=>{
    const btn_item_price = get_dom_num('price',btn.parentNode)
    if (is_free_shipping(btn_item_price, total))
      btn.show_free_shipping_icon();
    else btn.hide_free_shipping_icon();
  }
  ) 
}

function get_buy_buttons_dom() {
  const add_to_cart_btns = Array.from(document.querySelectorAll('.add-to-cart'));
  return add_to_cart_btns.map(btn => {
    btn.show_free_shipping_icon = function () {
      this.parentNode
        .querySelector('.free-shipping-icon')
        .classList.remove('hidden');
      };
    btn.hide_free_shipping_icon = function () {
      this.parentNode
        .querySelector('.free-shipping-icon')
        .classList.add('hidden');
      };
      return btn
    })}


// 비즈니스 - 세금 
function calc_tax(total) {
  return total * 0.1;
}
// 비즈니스 - 배송 
function is_free_shipping( itemPrice, cartTotal){
  return itemPrice + cartTotal >= 20000
}

// utils ? - DOM
function show_dom(el) {
  el.style.display = 'block';
}

// utils ? - DOM
function hide_dom(el) {
  el.style.display = 'none';
}

// utils - format
function formatToNumber(text){
  return parseFloat(text.replace(/[^\d]/g,''));
}
/*
function formatCurrencyToNumber(priceText) {
  const regex = /,/g;
  return parseFloat(priceText.replace(regex, ''));
}

*/

function formatNumberToCurrency(priceNum) {
  return priceNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
}

