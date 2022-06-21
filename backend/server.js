var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors()); //I have an Error with cors. I tried this line and commented lines below. Still have an error.
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./router.js');




app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));




app.use('/api', indexRouter);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});


app.listen(3000,() => console.log('Server is running on port 3000'));
