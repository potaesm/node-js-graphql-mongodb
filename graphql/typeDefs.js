const { gql } = require('apollo-server');

module.exports = gql`
  type Todo {
    _id: ID!
    userId: Int!
    title: String!
    completed: Boolean!
  }
  input CreateTodoInput {
    userId: Int!
    title: String!
  }
  input UpdateTodoInput {
    userId: Int
    title: String
    completed: Boolean
  }
  type Query {
    todos: [Todo]
    todo(_id: ID!): Todo
  }
  type Mutation {
    createTodo(createTodoInput: CreateTodoInput): Todo
    updateTodo(_id: ID!, updateTodoInput: UpdateTodoInput): Todo
    deleteTodo(_id: ID!): Todo
  }
`;
