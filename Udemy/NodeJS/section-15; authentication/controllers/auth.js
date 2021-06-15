const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('60c5395ba98da70520a7b8ee')
  .then(user => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save(err => {
      console.log(err);
      res.redirect('/');
    });
  })
  .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  // retrieving data from form
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  // finding if a user with the email in the request already exist in our database
  User.findOne({email: email})
  .then(userDoc=>{
    // we getting the user data back with the email entered in form
    if(userDoc){
      // if a user with the same email already exist in the database
      return res.redirect('/signup')
    }
    // if theres no user with the email entered
    const user = new User({
      // user schema, look at the model
      email: email,
      password: password,
      cart:{
        items: []
      }
    })
    // saving the user
    return user.save()
  })
  .then(result=>{
    res.redirect('/login')
  })
  .catch(err=>{
    console.log(err)
  })
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
