// requiring express saving in express variable
const express = require('express');

// setting app variable to an instanceof of express (accepts http methods)
const app = express();

// setting view engine
app.set('view engine', 'ejs');

// add middleware
app.use(express.static('./public'));

// gets '/' route
app.get('/', function(req, res){
    res.render('about.ejs');
});

app.get('/contact', function(req, res){
    res.render('/contact.ejs');
});

app.get('/project', function(req, res){
    res.render('/project.ejs');
})

// starting up our server to listen for http request
app.listen(3000, function(){
    console.log('Server is runing on port 3000...')
});