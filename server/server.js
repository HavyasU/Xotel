const express = require('express');
const app = express();
const path = require('path')
const port =  5000;
const connectDB = require('./db/config')


app.use(express.static(path.join(__dirname,'public')))
app.use('/', require(path.join(__dirname,"./routes/routes.js")))
app.use(express.static(path.join(__dirname,'static')))
app.use(express.json());

const register = require('./routes/register');
app.use('/', register);
const login = require('./routes/login');
app.use('/', login);

try {
    connectDB();
    app.listen(port, () => {
    console.log("app is running on port http://localhost:" + port)
  })
} 
catch (error) {
  console.log(error)
} 

module.exports = {app}