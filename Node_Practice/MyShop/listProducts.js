var faker = require('faker');

for (var i = 0; i < 11; i++) {
    var product = faker.commerce.productName();
    var price = faker.commerce.price();
    console.log(product + " - $" + price);
}