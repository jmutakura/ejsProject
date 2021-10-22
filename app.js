const express = require("express");


const app = express();

//register view engine
app.set('view engine', 'ejs');


//routes
app.get('/', (req, res) => {
    res.render('index');
})



app.listen(3000);
console.log('Server Running ...');