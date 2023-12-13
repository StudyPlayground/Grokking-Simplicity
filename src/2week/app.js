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
  cartList.innerHTML = shopping_cart
    .map(
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
  return priceNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
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
    // 제품 item + shpping icon 기능 추가된 객체
    var btn = buy_buttons[i];
    const btn_item_price = formatCurrencyToNumber(
      btn.parentNode.querySelector('.price').textContent
    );
    if (btn_item_price + shopping_cart_total >= 20000)
      btn.show_free_shipping_icon();
    else btn.hide_free_shipping_icon();
  }
}

// Q: 구매하기 버튼,
function get_buy_buttons_dom() {
  var buttons = [];
  const add_to_cart_btns = document.querySelectorAll('.add-to-cart');
  // shopping_cart를 도는 게 아니라 상품 전체를 돌아야 함
  for (var i = 0; i < add_to_cart_btns.length; i++) {
    var btn = add_to_cart_btns[i];
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
    buttons.push(btn);
  }

  return buttons;
}

// tax를 더한다는 것을 제외하면 set_calc_total_dom 동작과 같음, calc+total 을 관리하는 돔으로 통합하는 건 ?
function update_tax_dom(cartTotal) {
  const tax = calc_tax(cartTotal);
  set_total_price_dom(cartTotal + tax);
}

function set_total_price_dom(totalNum) {
  document.querySelector('.total-price').textContent =
    formatNumberToCurrency(totalNum);
}

// function set_tax_dom(value) {
//   document.querySelector('.total-price').textContent = formatNumberToCurrency(value);
// }

// function set_cart_total_dom(total) {
//   document.querySelector('.total-price').textContent = formatNumberToCurrency(total);
// }

function calc_tax(total) {
  return total * 0.1;
}
