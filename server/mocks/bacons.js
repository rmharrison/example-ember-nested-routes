/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var baconsRouter = express.Router();

  baconsRouter.get('/', function(req, res) {
    res.send({
      'bacons': [{id: 1}, {id: 2}, {id: 3}]
    });
  });

  baconsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  baconsRouter.get('/:id', function(req, res) {
    res.send({
      'bacons': {
        id: req.params.id
      }
    });
  });

  baconsRouter.put('/:id', function(req, res) {
    res.send({
      'bacons': {
        id: req.params.id
      }
    });
  });

  baconsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/bacons', require('body-parser'));
  app.use('/api/bacons', baconsRouter);
};
