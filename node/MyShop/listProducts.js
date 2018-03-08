var faker = require('faker');

var products = {};

// generate 10 products
for (var i = 0; i < 10; i++) {
  var name = faker.commerce.productName();
  var price = faker.commerce.price();
  products[name] = price;
}
// output products to command line
console.log(
  '=====================\nWelcome To My Shop\n=====================',
);
for (var key in products) {
  line_item = key + ' - $' + products[key];
  console.log(line_item);
}
