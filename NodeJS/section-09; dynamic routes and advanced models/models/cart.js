const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
);
  

module.exports = class Cart {

    // add/remove product
    static addProduct(id, productPrice){
        // fetch previous cart
        fs.readFile(p, (err, fileContent)=>{
            let cart = {products: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent);
            }
            // analyze the cart => find existing product in cart
            const existingProductIndex = cart.products.findIndex(prod=>{
                if(prod.id === id){
                    return prod;
                }
            });
            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;
            // add new product/increase quantity
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty+1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }else{
                updatedProduct = {
                    id: id,
                    qty: 1
                };
                // adding new product into cart
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + productPrice;
            fs.writeFile(p, JSON.stringify(cart), err=>{
                console.log(err)
            })
        })
    }
}