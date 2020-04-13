const express = require('express'); // import express library

const app = express(); // app means server here 

const parser = require('body-parser');

app.use(parser.urlencoded()); 

app.set('view engine', 'ejs'); // use ejs view


// app.use(express.static(__dirname+'/views/css'));




app.get('/', function (req, res){
res.send("home page");
}
); // app is sever, / is route, function is how we should respond

app.get('/tracking', function (req, res){
    res.send("tracking in general");
    }
    );
app.get('/game', function (req, res){
        res.send("play game here");
        }
        );
        
app.get('/user', function (req, res){
    res.send("user log in + data");
    }
    );
app.listen('3003');