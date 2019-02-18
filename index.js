//npm install swagger-ui-express swagger-jsdoc
const express = require("express");
//api
const restfulAPI =require('./restfulAPI');
//swagger
const swaggerDoc =require('./swaggerDoc');
//res.body
const bodyParser =require('body-parser');

const app=express(express);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

restfulAPI(app);
swaggerDoc(app);



app.use((err,req,res,next) => console.error('There was an error',err));

app.listen(3000,()=>console.log('App started'));