'use strict';
/**
 *
 *
 * Created by bilal on 3/27/16.
 */
var express = require('express');
var router = express.Router();
var models = require('../models');
var _ = require('underscore');
const assert = require("assert");

var errors = require("../lib/errors");

/* GET poll details page. */
router.get('/:id', function(req, res) {
  models.Poll.findOne({where: {id: req.params.id}})
    .then((poll) => {
      return Promise.all([Promise.resolve(poll), poll.getOptions()]);
    })
    .then((args) => {
      let poll = args[0];
      let options = args[1];
      res.render('poll_details', {  poll: poll, options: options });
    })
    .catch(errors(req, res));
});

// Create a new poll
router.post('/', function(req, res) {
  assert.ok(req.body.name);
  assert(req.body.options.length >= 1);
  var name = req.body.name;
  var options = req.body.options

  models.Poll.build({
    name: name,
    open: true,
    creator: req.sessionID
  }).save()
    .then((poll) => {
      return Promise.all(options.map((option) => {
        return models.Option.build({
          name: option,
          pollId: poll.id
        }).save();
      }));
    })
    .then((options) => {
      res.send(`/polls/${options[0].pollId}`);
    })
    .catch(errors(req, res));
});

module.exports = router;
