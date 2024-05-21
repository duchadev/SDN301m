const express = require('express');
const bodyParser = require('body-parser');

const bookRouter = express.Router();

bookRouter.use(bodyParser.json());

bookRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the book to you!');
})
.post((req, res, next) => {
    res.end('Will add the book: ' + req.body.title + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /book');
})
.delete((req, res, next) => {
    res.end('Deleting all books');
});
bookRouter.route('/:bookId')
    .all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    })
    .get( (req,res,next) => {
          res.end('Will send details of the book: ' + req.params.bookId +' to you!');
      })
      
      .post( (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /book/'+ req.params.bookId);
      })
      
      .put( (req, res, next) => {
      res.write('Updating the book: ' + req.params.bookId + '\n');
      res.end('Will update the book: ' + req.body.title + 
      ' with details: ' + req.body.description);
      })
      
      .delete((req, res, next) => {
      res.end('Deleting book: ' + req.params.bookId);
      })
module.exports = bookRouter;
