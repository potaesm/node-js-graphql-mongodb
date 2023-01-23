const { Schema, model } = require('mongoose');

// https://jsonplaceholder.typicode.com/todos

const todoSchema = new Schema({
  userId: {
    type: Number,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  completed: {
    type: Boolean,
    require: true
  }
});

module.exports = model('Todo', todoSchema);
