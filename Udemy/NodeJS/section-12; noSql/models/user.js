// importing mongoDB
const mongodb = require('mongodb')
// importing access to the database
const getDb = require('../util/database').getDb;

class User {
  constructor(username, email, cart, id){
    this.name = username
    this.email = email
    // storing cart in user object
    this.cart = cart; // {items: []}
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
    // const cartProduct = this.cart.items.findIndex(cp=>{ // items array in the cart
    //                                                     // cp is the individual product in the array
    //   // executing for every element in the items array
    //   // we want to return true if we find the product in the items array
    //   return cp._id === product._id
    // })

    // adding new field on the fly
    product.quantity = 1;
    // or
    //{...product, quantity=1}
    const updatedCart = {items: [product]}

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
