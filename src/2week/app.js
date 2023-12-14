

var shopping_cart = [];
var shopping_cart_total = 0;

const cartLayer = document.getElementById('cart-layer');
const cartList = document.getElementById('cart-list');
const cartIcon = document.querySelector('.carts>.icons');
const productList = document.querySelector('.items');


// event_cart :  oepn & close
cartIcon.addEventListener('click', () => {
  show_dom(cartLayer);
  set_cart_list_dom(shopping_cart, cartList);
});

cartLayer.addEventListener('click', (e) => {
  if (e.target !== cartLayer) return;
  hide_dom(cartLayer);
});


function set_cart_list_dom(cartItems, cartContainer) {
  cartContainer.innerHTML = cartItems.map(
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


// event_products - add to cart   
productList.querySelectorAll('.add-to-cart').forEach((button) =>
  button.addEventListener('click', ({ target }) => {
    const name = target.parentNode.querySelector('.menu-name').textContent;
    const category = target.parentNode.querySelector('.category').textContent;
    const price = formatCurrencyToNumber(target.parentNode.querySelector('.price').textContent);

    /* 전역 변수를 인자로 넘겨줬지만, 공유 객체이므로 카피해서 사용해야 하겠지? */

    // cart change
    shopping_cart = add_item_to_cart({ name, category, price }, shopping_cart);

    // total change
    shopping_cart_total = calc_cart_total(shopping_cart)

    // product change
    update_shipping_icons(shopping_cart_total);
  })
);

function add_item_to_cart(item, cart) {
  return [...cart, item]
}

// header(total), main(product), cart(product)
function calc_cart_total(cart) {
  const total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  // Q : 왜 cart_total 과 tax DOM 업데이트를 2번 해줘야 할까?
  set_total_price_dom(total);
  update_tax_dom(total);
  return total;
}

//header(total)
function update_tax_dom(total) {
  // tax를 더한다는 것을 제외하면 set_calc_total_dom 동작과 같음, calc+total 을 관리하는 돔으로 통합 
  set_total_price_dom(total + calc_tax(total));
}

function set_total_price_dom(totalNum) {
  document.querySelector('.total-price').textContent =
    formatNumberToCurrency(totalNum);
}


// main(product)
function update_shipping_icons(total) {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    // 제품 item + shpping icon 기능 추가된 객체
    var btn = buy_buttons[i];
    const btn_item_price = formatCurrencyToNumber(
      btn.parentNode.querySelector('.price').textContent
    );
    if (is_free_shipping(btn_item_price, total))
      btn.show_free_shipping_icon();
    else btn.hide_free_shipping_icon();
  }
}

// main(product)
function get_buy_buttons_dom() {
  var buttons = [];
  const add_to_cart_btns = document.querySelectorAll('.add-to-cart');
  // Q: 구매하기 버튼
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





// function set_tax_dom(value) {
//   document.querySelector('.total-price').textContent = formatNumberToCurrency(value);
// }

// function set_cart_total_dom(total) {
//   document.querySelector('.total-price').textContent = formatNumberToCurrency(total);
// }



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
function hide_dom() {
  el.style.display = 'none';
}

// utils - format
function formatCurrencyToNumber(priceText) {
  const regex = /,/g;
  return parseFloat(priceText.replace(regex, ''));
}

function formatNumberToCurrency(priceNum) {
  return priceNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
}

