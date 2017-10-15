const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    // res.send('<h1>Hello Express </h1>');
    res.send({
        name:'Karthick',
        likes:[
            'Travelling',
            'Reading'
        ]
    });
});

app.get('/about',(req,res) => {

    // res.send('About Page');
    res.render('about.hbs',{
        pageTitle : 'About pages from node',
        currentYear : new Date().getFullYear()
    });

});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to request your message'
    });
});

app.listen(3000,() => {
    console.log('Server is started in 3000');
});