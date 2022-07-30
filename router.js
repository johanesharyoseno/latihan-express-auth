const router = require('express').Router();

const auth = require('./controllers/auth-controllers')
const restrict = require('./middlewares/restrict')
router.get('/register', auth.registerPage);
router.post('/register',auth.register);
router.get('/login', auth.loginPage);
router.post('/login',auth.login);

router.get('/profile', restrict, auth.profile)

router.get('/', restrict, (req,res)=>{
    return res.render('index')
});
module.exports = router;