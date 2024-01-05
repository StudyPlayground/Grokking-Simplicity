import ShoppingCart from './cart.js';

const {
  cartGetter: getCart,
  cartTotalGetter: getCartTotal,
  cartSetter: setCart,
} = ShoppingCart();

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

productList.querySelectorAll('.add-to-cart').forEach((button) =>
  button.addEventListener('click', ({ target }) => {
    setCart('add', makeCartItem(target.parentNode));
    update_shipping_icons_dom(getCartTotal());
    set_total_price_dom(getCartTotal());
  })
);

// action - dom : get_dom_value 호출
function makeCartItem(targetProduct = document) {
  const PRODUCT_KEYS = [
    {
      type: 'string',
      className: 'category',
    },
    {
      type: 'number',
      className: 'price',
    },
    {
      type: 'string',
      className: 'menu-name',
    },
  ];

  const cartItem = {};
  PRODUCT_KEYS.forEach((key) => {
    cartItem[key.className] = get_dom_value(
      key.className,
      key.type,
      targetProduct
    );
  });
  return cartItem;
}

// action - dom : get_buy_buttons_dom 호출
function update_shipping_icons_dom(total) {
  const buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((btn) => {
    const btn_item_price = get_dom_value('price', 'number', btn.parentNode);
    if (is_free_shipping(btn_item_price, total)) btn.show_free_shipping_icon();
    else btn.hide_free_shipping_icon();
  });
}

// action - dom [dynamicSelector]
function get_dom_value(className, valueType, target = document) {
  const el = target.querySelector(`.${className}`);
  if (!el) return null;

  if (valueType === 'string') {
    return el.textContent;
  } else {
    return formatToNumber(el.textContent);
  }
}

// action - dom 'cart-list'
function set_cart_list_dom() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = getCart()
    .map(
      (item) => `
        <div class='cart-item'>
        <span class='category'>${item.category}</span>
          <h3 class='name'>${item['menu-name']}</h3>
          <p class='price'>${formatNumberToCurrency(item.price)}</p>
        </div>
        `
    )
    .join('');
}

// action - dom 'total-price'
function set_total_price_dom(total) {
  document.querySelector('.total-price').textContent = formatNumberToCurrency(
    total + calc_tax(total)
  );
}

// action - dom 'add-to-cart'
function get_buy_buttons_dom() {
  const add_to_cart_btns = Array.from(
    document.querySelectorAll('.add-to-cart')
  );
  return add_to_cart_btns.map((btn) => {
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
    return btn;
  });
}

// 비즈니스 - 세금
function calc_tax(total) {
  return total * 0.1;
}
// 비즈니스 - 배송
function is_free_shipping(itemPrice, cartTotal) {
  return itemPrice + cartTotal >= 20000;
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
function formatToNumber(text) {
  return parseFloat(text.replace(/[^\d]/g, ''));
}

// utils - format
function formatNumberToCurrency(priceNum) {
  return priceNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
}
