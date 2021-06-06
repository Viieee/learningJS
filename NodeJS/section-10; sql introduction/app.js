const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// importing the database
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// we can use then and catch because we use promise (look in the database.js file)
    // when we exporting the db
// the then method will execute on whatever the execute returned
// the catch method will execute when error occurred
db.execute('SELECT * FROM products').then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
