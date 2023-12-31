const per2Int = (value, per) => (value * per) / 100;

const Client = ({ name, type, location }) => {
  const _offers = {
    normal: 0,
    premium: 20,
  };
  const _name = name;
  const _type = type;
  const _location = location;

  getName = () => _name;
  getType = () => _type;
  getLocation = () => _location;
  getPriceByProduct = product => product.getValue() - per2Int(product.getValue(), _offers[_type]);

  return {
    getName,
    getType,
    getLocation,
    getPriceByProduct,
  };
};

const Product = ({ value, name, shipping }) => {
  const _value = value;
  const _name = name;
  const _shipping = shipping;

  getValue = () => _value;
  getProductName = () => _name;
  getShipping = () => _shipping;

  return {
    getValue,
    getProductName,
    getShipping,
  };
};

const Order = ({ id, client, product }) => {
  const _taxes = {
    EU: 21,
    USA: 14,
  };
  const _id = id;
  const _client = client;
  const _product = product;

  getId = () => _id;
  getClient = () => _client;
  getProduct = () => _product;
  getTaxes = loc => _taxes[loc];

  return {
    getId,
    getClient,
    getProduct,
    getTaxes,
  };
};

const Summary = ({ order }) => {
  const _order = order;

  printSummary = () => {
    let client = _order.getClient();
    let product = _order.getProduct();

    const summary =  `Order: ${_order.getId()}
                Client: ${client.getName()}
                Product: ${product.getProductName()}
                TotalAmount: ${client.getPriceByProduct(product) + _order.getTaxes(client.getLocation())}
                
                
                Arrival in: ${_order.getProduct().getShipping()} days.`;
    console.log(summary);
  };

  return {
    printSummary,
  };
};

const client = Client({
  name: 'Max',
  type: 'premium',
  location: 'USA'
});
const product = Product({
  name: 'iPhone',
  value: 100,
  shipping: 3
});
const order = Order({
  id: '123',
  client,
  product,
})
const summary = Summary({
  order: order,
});
summary.printSummary();