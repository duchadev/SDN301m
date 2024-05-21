const express = require('express');
const bodyParser = require('body-parser');

const genresRouter = express.Router();

genresRouter.use(bodyParser.json());

genresRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the genres to you!');
})
.post((req, res, next) => {
    res.end('Will add the genre: ' + req.body.id + ' with name: ' + req.body.name);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /genres');
})
.delete((req, res, next) => {
    res.end('Deleting all genres');
});
genresRouter.route('/:id')
    .all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    })
    .get( (req,res,next) => {
          res.end('Will send details of the genre: ' + req.params.id +' to you!');
      })
      
      .post( (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /genres/'+ req.params.id);
      })
      
      .put( (req, res, next) => {
      res.write('Updating the genre: ' + req.params.id + '\n');
      res.end('Will update the genre: ' + req.body.name + 
      ' with details: ' + req.body.description);
      })
      
      .delete((req, res, next) => {
      res.end('Deleting genre: ' + req.params.id);
      })
module.exports = genresRouter;
