const Todo = require('../model/todo');

module.exports = {
  Query: {
    todos: async () => await Todo.find({}),
    todo: async (_parent, args) => await Todo.findById(args._id)
  },
  Mutation: {
    createTodo: async (_parent, args) => {
      const todo = new Todo(args.createTodoInput);
      todo.completed = false;
      return await todo.save();
    },
    updateTodo: async (_parent, args) => {
      const { _id, updateTodoInput } = args;
      return await Todo.findOneAndUpdate({ _id }, updateTodoInput, { new: true });
    },
    deleteTodo: async (_parent, args) => {
      return await Todo.findByIdAndDelete(args._id);
    }
  }
};
