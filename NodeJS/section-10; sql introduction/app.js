const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// importing the sequelize
const sequelize = require('./util/database');
// importing the models 
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item')


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// adding new middleware
app.use((req,res,next)=>{
    // this will be executed if we done with server initialization
    User.findByPk(1)
    .then(user => {
        // storing the user into request object
        // because its a sequelize method 
        // if we access req.user in other parts of the code
        // we can access all sequelize method
        req.user = user;
        next();
    })
    .catch(err=>{
        console.log(err)
    });
})


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// relating models
    // a user created the product
    // one(user) to many(product)
Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
}); 
    // or and
User.hasMany(Product);

    // a user and cart
    // one(user) to one (cart)
User.hasOne(Cart);
Cart.belongsTo(User);

    // many(products) to many(cart)
    // need intermediate table that stores both the id of the products and the carts
    // CartItem will be the intermediate table
Product.belongsToMany(Cart, {through: CartItem});
Cart.belongsToMany(Product, { through: CartItem });



// lookin at all the models defined and creates tables for them
// sequelize.sync({force: true})
sequelize.sync()
.then(result=>{
    // listening to the result / what we get as a response
    return User.findByPk(1);
})
.then(user=>{
    if(!user){
        return User.create({
            name: 'Vieri',
            email: "dummyEmail@gmail.com"
        })
    }
    return Promise.resolve(user);
})
.then(user => {
    // creating cart for the user
    return user.createCart();
})
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)
});

