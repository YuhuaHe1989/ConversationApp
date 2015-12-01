'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message;

var messageSchema = Schema({
  name: String,
  messages: Array,
});

Message = mongoose.model('Messge', messageSchema);
module.exports = Message;



