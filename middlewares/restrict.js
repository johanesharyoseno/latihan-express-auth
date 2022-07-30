const restrict = (req,res,next) =>{
    if (req.isAuthenticated()){
        return next();
    }
    return res.restrict('/login')
}

module.exports = restrict;