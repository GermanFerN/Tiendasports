const express = require('express');
const path = require('path');

const app = express();



//localhost:

app.listen(3000, () => console.log ('Esto fue exitoso'));

app.use(express.static('public'));

// Motor de plantilla

app.set("view engine", "ejs");


app.get('/', (req, res)=>{
    res.render("products/home"); 
});

app.get('/login', function(req, res) {
    res.render("users/login") 
});

app.get('/register', function(req, res) {
        res.render("users/register") 
});

app.get('/cart', function(req, res) {
    res.render("products/cart") 
});
