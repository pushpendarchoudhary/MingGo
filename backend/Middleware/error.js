const ErrorHandler = require("../Utils/Errorhandler");

module.exports = (err, res, req, next )=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal Server Error";

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
 
}