// importing sequelize 
const Sequelize = require('sequelize');

// importing the connection pool
const sequelize = require('../util/database')

// defining the cart model
const CartItem = sequelize.define('cartItem', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = CartItem;