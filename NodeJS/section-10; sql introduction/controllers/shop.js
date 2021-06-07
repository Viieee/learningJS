const Product = require('../models/product');
const Cart = require('../models/cart')

exports.getProducts = (req, res, next) => {
  // getting all the records using sequelize 
  Product.findAll()
  .then(products=>{
    res.render('shop/product-list', {
      prods: products, // products
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err=>{
    console.log(err);
  })
};

// getting the details of one product
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId; // productId is the url path name in router
  Product.findByPk(prodId) // findByPk is replacing findById in sequelize
  .then((product) => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    })
  })
  .catch(err=>{
    console.log(err)
  })

  // we can also use findAll() method and setting some restriction in it (using where syntax)
};

// getting all the data in index html page
exports.getIndex = (req, res, next) => {
  // getting all the records using sequelize 
  Product.findAll()
  .then(products=>{
    res.render('shop/index', {
      // additional data to be dynamically used in the ejs files
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err=>{
    console.log(err);
  })
};

exports.getCart = (req, res, next) => {
  // Cart.getProductsInCart(cart=>{ // getting all items in cart
  //   Product.fetchAll(products=>{ // fetching all products we have (not just in the cart)
  //     // the array that will hold all the products in cart
  //     const cartProducts = [];
  //     // looping every item we have, to check if its in the cart or not
  //     for(product of products){ // product represents every single item in products array

  //       // check if the item we iterating right now is in the cart or not
  //       // cart.products is the key value containing all the products data in the form of an array
  //         // we want to return all the values that fulfilled the criteria
  //         // we will store it in a constant
  //       const cartProductData = cart.products.find(prod=>prod.id===product.id);
  //       console.log('cart product data: '+ cartProductData)
  //       if(cartProductData){
  //         cartProducts.push({
  //           productData: product,
  //           qty: cartProductData.qty
  //         })
  //       }
  //     }
      // res.render('shop/cart', {
      //   // additional data we want to send to our view
      //   path: '/cart',
      //   pageTitle: 'Your Cart',
      //   products: cartProducts
      // });
  //   });
  // });

  req.user.getCart()
  .then(cart=>{
    return cart.getProducts()
    .then(products => {
      res.render('shop/cart', {
        // additional data we want to send to our view
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err=>{
      console.log(err)
    });
  })
  .catch(err=>{
    console.log(err)
  })
};

// adding products to the cart
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId; // product id is the name attribute in the input tag
  let fetchedCart;
  req.user.getCart()
  .then(cart=>{
    fetchedCart = cart;
    return cart.getProducts({where:{id:prodId}})
  })
  .then(products =>{
    let product;
    if(products.length>0){
      product = products[0]
    }
    let newQuantity = 1;
    if(product){
      // if we already have the product in the cart
    }
    return Product.findByPk(prodId)
    .then(product=>{
      return fetchedCart.addProduct(product, { through: {quantity: newQuantity} }); // through is used to adding extra data
    })
    .then(result => {
      res.redirect('/cart')
    })
    .catch(err=>{
      console.log(err)
    })
  })
  .catch(err=>{
    console.log(err)
  })
}

exports.postCartDelete = (req, res, next)=>{
  const prodId = req.body.productId;
  // finding the product price, because we need it to delete the product from cart
  Product.findById(prodId, product=>{
    Cart.deleteProduct(prodId, product.price)
    res.redirect('/cart')
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
