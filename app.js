const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//register view engine
app.set('view engine', 'ejs');


//routes
app.get('/', (req, res) => {
    res.render('index');
})



const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Server Running ...');