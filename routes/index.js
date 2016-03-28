var express = require('express');
var router = express.Router();
var models = require('../models');
var _ = require('underscore');

var errors = require("../lib/errors");

/* GET home page. */
router.get('/', function(req, res) {
  models.Poll.findAll()
    .then((polls) => {
      polls = polls.map((poll) => {
        return {
          name: poll.name,
          id: poll.id
        };
      });
      res.render('index', { title: 'Express', polls: polls });
    })
    .catch(errors(req, res));
});

module.exports = router;
