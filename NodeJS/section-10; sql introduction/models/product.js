// importing sequelize 
const Sequelize = require('sequelize');

// importing the database connection pool
const sequelize = require('../util/database');

// defining product model
const Product = sequelize.define('product', {
  // attribute/fields of the model
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
    // you can also just define the type
    // title: Sequelize.STRING
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// exporting the Product model
module.exports = Product;