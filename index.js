const express = require('express');
const app = express();
const port = 3000;
const ipadress = 'ipadress';

app.get('/', function (req,res) {
   res.sendFile('index.html', {root:__dirname});
})

app.get('/quiza', function (req, res){
   res.sendFile('kueche.html', {root:__dirname});
})

app.get('/quizb', function (req, res) {
   res.sendFile('kueche2.html', {root:__dirname});
})

app.get('/quizc', function (req, res) {
   res.sendFile('Badezimmer.html' , {root:__dirname});
})

app.get('/quizd', function (req, res) {
   res.sendFile('Schlafzimmer.html', {root:__dirname});
} )

app.listen(port, ipadress ,() => {
   console.log(`Now listening on port ${port}`);
});
