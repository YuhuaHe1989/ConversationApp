'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');
var Message = require('../models/message');

// USERS

router.get('/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user){
    res.send({
      displayName: user.displayName,
      picture: user.picture
    });
  })
});

router.get('/allusers', function(req, res) {
  User.find({}, function(err, users) {
    res.send(users);
  });
});

router.post('/chatcenter/:name', function(req, res) {
  var conversation = new Message;

  conversation.messages.push(req.body.message);
  conversation.name = req.body.name;

  conversation.save(function(err, data) {
    res.status(err ? 400 : 200).send(err || data);
  });
});

router.get('/chatcenter/:name', function(req, res) {
  var username = req.params.name;
  Message.find({name: username}, function(err, data) {
    res.send(data);
  })
});

router.get('/chatcenter', function(req, res) {
  Message.find({}, function(err, data) {
    res.send(data);
  })
});


module.exports = router;






