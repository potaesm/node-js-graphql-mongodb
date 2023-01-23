const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./graphql');

const PORT = process.env.PORT || 3000;
const DB_CONNECTION_URI = 'mongodb://localhost:27017/local';
mongoose.set('strictQuery', false);
mongoose.connect(DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('MongoDB connection established'));
mongoose.connection.on('error', () => console.error('MongoDB connection failed'));
const server = new ApolloServer({ typeDefs, resolvers });
server.listen(PORT).then(({ url }) => console.log(`Apollo server in running with url: ${url}`));
