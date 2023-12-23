function getElementTextContent(rootNode, selector) {
  return rootNode.querySelector(selector).textContent;
}

function setElementTextContent(rootNode, selector, newText) {
  rootNode.querySelector(selector).textContent = newText;
}

function getValue(item, key) {
  return item[key];
}

function addItemInArray(array, item) {
  //NOTE 불변성 필요
  return array.push(item);
}

function getTotalByKey(array, key) {
  return array.reduce((total, item) => total + getValue(item, key), 0);
}

function getTotalPrice(cart) {
  return getTotalByKey(cart, 'price');
}

