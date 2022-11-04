const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) =>{
    
  console.log(err);

    let error = {...err}
    error.message = err.message;


    //Mongoose bad object 

    if (err.name === 'CastError'){

        const message = "Resource not found";
        error = new ErrorResponse(message, 404);
    }
 
    if (err.code === 11000){
        const message = "Duplicate Field Value Entered";
        error = new ErrorResponse(message, 404);
    }


    if (err.name === "ValidationError"){
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorResponse(message, 404);

    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })
}

module.exports = errorHandler;