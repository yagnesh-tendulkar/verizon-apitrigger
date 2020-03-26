//other deps
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Importing Mongoose library
const app = express();
const router = express.Router();

var port = process.env.PORT || 3000;
// var uri=process.env.URI;
//var uri = "mongodb://localhost/botInsights";
console.log("Application Environment : " + app.settings.env);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
//Enabling CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(__dirname + '/public/'))
// app.use('/', express.static(__dirname + '/public/'), function(req, res){
//   res.sendFile(
//     path.join(__dirname, 'public/index.html')
//   );
// })

// app.use('/agent', express.static(__dirname + '/public/'), function(req, res){
//   res.sendFile(
//     path.join(__dirname, 'public/agent.html')
//   );
// })
// app.get('/',(req,res)=>{
//   // res.send("sdsfd")
//     res.sendFile(path.join(__dirname, 'public/agent.html'));
//   })

app.get('/agent',(req,res)=>{
// res.send("sdsfd")
  res.sendFile(path.join(__dirname, 'public/agent.html'));
})

app.listen(port, ()=>{
  console.log("Server started on port: " + port);
});
