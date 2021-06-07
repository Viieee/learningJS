const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// importing the sequelize
const sequelize = require('./util/database');
// importing the models 
const Product = require('./models/product');
const User = require('./models/user');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// relating models
    // a user created the product
Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
}); 
    // or and
User.hasMany(Product);

// lookin at all the models defined and creates tables for them
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
    console.log(user)
    app.listen(3000);
})
.catch(err=>{
    console.log(err)
});

