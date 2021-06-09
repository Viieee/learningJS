// importing access to the database
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, imageUrl, description){
    this.title = title
    this.price = price
    this.imageUrl = imageUrl
    this.description = description
  }

  // saving the object created with this class to database
  save(){
    // get access to the database
    const db = getDb();
    // telling mongoDb which collection you want to work with
    // if its not exist then it will be created
    /*products collection*/
    // you can insert data with insertOne() or insertMany()
    // insertOne() will take an object 
    // db.collection('products').insertOne({name: 'A Book', price: 99})
    // insertMany() will take an array of objects

    // in this case we want to insert the object we created through this class
    return db.collection('products').insertOne(this)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

module.exports = Product;
