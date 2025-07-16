const pathSpecific =(req,res,next)=>{
    console.log("path specific middleware");
    next();
}

const genericMiddleware = (req,res,next)=>{
    console.log('generic middleware');
    next();
}

module.exports = {genericMiddleware,pathSpecific}