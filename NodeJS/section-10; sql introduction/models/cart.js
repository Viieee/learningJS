// importing sequelize 
const Sequelize = require('sequelize');

// importing the connection pool
const sequelize = require('../util/database')

// defining the cart model
const Cart = sequelize.define('cart', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Cart;