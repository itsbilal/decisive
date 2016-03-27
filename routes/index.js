var express = require('express');
var router = express.Router();
var models = require('../models');
var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Poll.findAll()
    .then((polls) => {
      polls = _.pluck(polls, 'name');
      res.render('index', { title: 'Express', stuff: polls });
    });
});

module.exports = router;
