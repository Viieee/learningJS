// importing mongoDB
const mongodb = require('mongodb')
// importing access to the database
const getDb = require('../util/database').getDb;

class User {
  constructor(username, email, cart, id){
    this.name = username
    this.email = email
    // storing cart in user object
    this.cart = cart; // cart will look like this => {items: []}
    this._id = id;
  }

  save(){
    // get access to the database
    const db = getDb();
    return db.collection('users')
    .insertOne(this)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  // adding product to cart
  addToCart(product){
    // finding whether the product is already in the cart or not
    const cartProductIndex = this.cart.items.findIndex(cp=>{ // items array in the cart
                                                        // cp is the individual product in the array
      // executing for every element in the items array
      // we want to return true if we find the product in the items array
      return cp.productId.toString() === product._id.toString()
    })

    // default value
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if(cartProductIndex >= 0){
      // if the item already exist we adding the quantity by 1
      newQuantity = this.cart.items[cartProductIndex].quantity + 1 ;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    }else{
      // if the item is new to cart
      // we adding a new one to the array
      updatedCartItems.push(
        {
          // we only want to store product's id
          // and the quantity of the product in cart
          productId: new mongodb.ObjectId(product._id), 
          quantity: newQuantity
        }
      )
    }


    // adding new field on the fly
    // product.quantity = 1;
    // or
    // {
    //   {...product}, 
    //   quantity: newQuantity
    // }

    // the cart object
    // the cart object will have 1 key called items
    // items will store an array of object
    // and in the object it will store all the products and the quantity inside of the cart
    const updatedCart = {
      items: updatedCartItems
    }

    // updating user to store the cart in there
    const db = getDb();

    return db
    .collection('users')
    .updateOne(
      {_id: new mongodb.ObjectId(this._id)},
      {$set: {
        // only updating the value in cart field
        cart: updatedCart
      }}
    )
    
  }


  

  static findById(id){
    // get access to the database
    const db = getDb();

    // same operation as findById in product model
    return db
    .collection('users')
    .find({_id: new mongodb.ObjectId(id)})
    .next() 
    .then(user=>{
      console.log('find by id' + user)
      return user;
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

module.exports = User;
