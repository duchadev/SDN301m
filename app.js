const express = require('express')
const morgan = require('morgan')
const http = require('http')
const path = require('path');
const hostname ='localhost'
const bodyParser = require('body-parser')
const port = 3000
const bookRouter = require('./routers/booksRouter');
const authorRouter = require('./routers/authorRouter');
const genresRouter = require('./routers/genresRouter');

const app = express();  
	const mongoose = require('mongoose');
	
	const Dishes = require('./model/dishes');
	
	const url = 'mongodb://localhost:27017/conFusion';
	const connect = mongoose.connect(url);
	
	connect.then((db) => {
	    console.log("Connected correctly to server");
	}, (err) => { console.log(err); });

app.use('/books', bookRouter);
app.use('/author', authorRouter);
app.use('/genres', genresRouter);

app.use(bodyParser.json())
//==============================================================
// app.all('/dishes', (req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
//   });
  
//   app.get('/dishes', (req,res,next) => {
//       res.end('Will send all the dishes to you!');
//   });
  
//   app.post('/dishes', (req, res, next) => {
//    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
//   });
  
//   app.put('/dishes', (req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /dishes');
//   });
   
//   app.delete('/dishes', (req, res, next) => {
//       res.end('Deleting all dishes');
//   });
  
//   app.get('/dishes/:dishId', (req,res,next) => {
//       res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
//   });
  
//   app.post('/dishes/:dishId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /dishes/'+ req.params.dishId);
//   });
  
//   app.put('/dishes/:dishId', (req, res, next) => {
//   res.write('Updating the dish: ' + req.params.dishId + '\n');
//   res.end('Will update the dish: ' + req.body.name + 
//   ' with details: ' + req.body.description);
//   });
  
//   app.delete('/dishes/:dishId', (req, res, next) => {
//   res.end('Deleting dish: ' + req.params.dishId);
//   });
  
//==============================================================
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'..')+'/public'))
console.log(path.join(__dirname,'..')+'/public')
app.use((req,res,next)=> {
    // console.log(req.headers);
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')

})



const sever = http.createServer(app)
sever.listen(port,hostname,()=>
{
    console.log(`Sever running at http://${hostname}:${port}/`);
})