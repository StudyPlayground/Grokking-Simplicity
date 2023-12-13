var shopping_cart = [];
var shopping_cart_total = 0;

// cart layer
const cartLayer = document.getElementById('cart-layer');
const cartList = document.getElementById('cart-list');
const cartIcon = document.querySelector('.carts>.icons');

function open_cart() {
  cartLayer.style.display = 'block';
}

function close_cart() {
  cartLayer.style.display = 'none';
}

function show_cart_list() {
  cartList.innerHTML = shopping_cart.map(
    (item) => `
  <div class='cart-item'>
  <span class='category'>${item.category}</span>
    <h3 class='name'>${item.name}</h3>
    <p class='price'>${item.price}</p>
  </div>
  `
  );
}

cartIcon.addEventListener('click', () => {
  open_cart();
  show_cart_list();
});

cartLayer.addEventListener('click', (e) => {
  if (e.target !== cartLayer) return;
  close_cart();
});

function formatCurrencyToNumber(priceText) {
  const regex = /,/g;
  return parseFloat(priceText.replace(regex, ''));
}

function formatNumberToCurrency(priceNum) {
  return priceNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원';
}

// items
document.querySelectorAll('button').forEach((button) =>
  button.addEventListener('click', ({ target }) => {
    const name = target.parentNode.querySelector('.menu-name').textContent;
    const category = target.parentNode.querySelector('.category').textContent;
    const price = formatCurrencyToNumber(
      target.parentNode.querySelector('.price').textContent
    );

    add_item_to_cart({ name, category, price });
  })
);

function add_item_to_cart(item) {
  shopping_cart.push(item);
  console.log(shopping_cart);
  calc_cart_total();
}

// Q : 왜 cart_total 과 tax DOM 업데이트를 2번 해줘야 할까?
function calc_cart_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_total_price_dom(shopping_cart_total);
  update_tax_dom(shopping_cart_total);
  update_shipping_icons();
}


function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var item = buy_buttons[i];
    console.log(item);
    if (item.price + shopping_cart_total >= 20000) item.show_free_shipping_icon();
    else item.hide_free_shipping_icon();
  }
}

// Q: shopping_cart를 복제하고, 무료 배송 아이콘을 보여주는 기능이 추가된 객체 배열. 
function get_buy_buttons_dom() {
  var buttons = [];
  const free_shipping_icon = document.querySelector('.free-shipping');
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    item.show_free_shipping_icon = function () {
      free_shipping_icon.classList.remove('hidden');
    };
    item.hide_free_shipping_icon = function () {
      free_shipping_icon.classList.add('hidden')
    };
    buttons.push(item);
  }

  return buttons;
}

// tax를 더한다는 것을 제외하면 set_calc_total_dom 동작과 같음, calc+total 을 관리하는 돔으로 통합하는 건 ?
function update_tax_dom( cartTotal) {
  const tax = calc_tax(cartTotal)
  set_total_price_dom(cartTotal + tax);
}

function set_total_price_dom(totalNum){
  document.querySelector('.total-price').textContent = formatNumberToCurrency(totalNum);
}

// function set_tax_dom(value) {
//   document.querySelector('.total-price').textContent = formatNumberToCurrency(value);
// }

// function set_cart_total_dom(total) {
//   document.querySelector('.total-price').textContent = formatNumberToCurrency(total);
// }


function calc_tax(total){
  return total * 0.1
}