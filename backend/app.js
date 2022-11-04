const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const errorHandler = require("./middleware/error");



// Import Routes

const authRoutes = require("./routes/auth");


// Connect DB

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=> console.log("DB connected"))
.catch((err) => console.log(err));

// Mid

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// Routes Middleware

app.use("/api", authRoutes)

// Error Middleware

app.use(errorHandler);



const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`app is running on ${port}`)
});