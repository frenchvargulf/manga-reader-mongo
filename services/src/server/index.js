const {
    ApolloServer
} = require('apollo-server-express');
import bodyParser from 'body-parser';
import express from 'express';

// import resolvers from '#root/graphql/resolvers';
import typeDefs from '../graphql/typeDefs';

const apolloServer = new ApolloServer({
    resolvers: {},
    typeDefs
});

const app = express();

apolloServer.applyMiddleware({
    app,
    path: "/graphql"
});

app.use(
    "/graphql",
    bodyParser.json(),
);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'missing endpoint'
    })
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`Services listening on ${port}`))