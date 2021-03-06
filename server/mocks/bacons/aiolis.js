/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var baconsAiloisRouter = express.Router();

  baconsAiloisRouter.get('/bacons/:bacon_id/aiolis', function(req, res) {
    var bacon_id = req.params.bacon_id;
    res.send({
      'aiolis': [
        {id: 1, bacon_id: bacon_id, mustard: true, rating: 3}, 
        {id: 2, bacon_id: bacon_id, mustard: false, rating: 8}, 
        {id: 3, bacon_id: bacon_id, mustard: true, rating: 2}
      ]
    });
  });

  baconsAiloisRouter.post('/bacons/:bacon_id/aiolis', function(req, res) {
    res.status(201).end();
  });

  baconsAiloisRouter.get('/bacons/:bacon_id/aiolis/:id', function(req, res) {
    var bacon_id = req.params.bacon_id;
    var rating = Math.floor(Math.random()*11);
    var mustard = Math.random() > 0.5 ? true : false;
    res.send({
      'aiolis': {
        id: req.params.id,
        bacon_id: bacon_id,
        mustard: mustard,
        rating: rating
      }
    });
  });

  baconsAiloisRouter.put('/bacons/:bacon_id/aiolis/:id', function(req, res) {
    var bacon_id = req.params.bacon_id;
    res.send({
      'aiolis': {
        id: req.params.id,
        bacon_id: bacon_id
      }
    });
  });

  baconsAiloisRouter.delete('/bacons/:bacon_id/aiolis/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/bacons-aiolis', require('body-parser'));
  app.use('/api', baconsAiloisRouter);
};
