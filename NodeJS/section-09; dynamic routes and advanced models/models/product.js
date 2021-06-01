const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);


const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // adding id to the object before being pushed into the array
    // this id will be passed into each individual product in ejs so we can edit it later
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb){
    // the main goal of this static method is to filter the product based on the id passed into it
    // and later this function will execute the callback function and passing the filtered product to that callback function
   
    getProductsFromFile(products =>{  // products retrieved from the returned value of the getProductsFromFile function
                                      // parsed from JSON into array
      // filtering the product based on id
      const product = products.find(prod=>{
        if (prod.id === id){
          return prod; // filtered product
        }
      });
      // executing callback function and passing the filtered product into it
      cb(product);
    })
  }
};
