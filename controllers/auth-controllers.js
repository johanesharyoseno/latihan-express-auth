const bcrypt = require ('bcrypt')
const passport = require ('passport')
const {User} = require ('../models')

const registerPage =(req,res) => {
    return res.render('register')
}

const register =(req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    if (password.length <8){
        return res.render ('register', {error: "password harus 8 karakter"})
    }

    const encryptedpassword = bcrypt.hashSync(password, 10);

    User.create({
        username: username, 
        password: encryptedpassword
    }). then(() => {
        return res.redirect ('/login')
    })
}

const loginPage = (req,res)=>{
    let messages = ""
    if(req.session){
    if(req.session.message){
        messages = req.session.messages(0);

        req.session.message = []
    }
}
return res.render('login', {messages:messages})
}

const login = passport.authenticate('local',{
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureMessage: true
})

const profile = (req, res) => {
    return res.render('profile',{ user: req.user.dataValues});
}

module.exports = {
    registerPage,
    register,
    loginPage,
    login,
    profile
}