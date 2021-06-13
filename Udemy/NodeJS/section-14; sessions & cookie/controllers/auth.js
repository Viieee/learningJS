exports.getLogin = (req, res, next)=>{
    const isLoggedIn = req.get('Cookie') // getting the cookie header
    .split('=')[1]  === 'value' // spliting it and turning it into an array , getting the second index to get the value
    
    console.log(isLoggedIn)
    res.render('auth/login',{
        path: '/login',
        pageTitle: 'Login',
        isLoggedIn: isLoggedIn
    })
}

exports.postLogin = (req, res, next)=>{
    // req.isLoggedIn = true;
    res.setHeader('Set-Cookie', 'loggedIn=true') // setting cookie
    res.redirect('/');
}