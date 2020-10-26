"use strict";

const { ApolloServer } = require("apollo-server-lambda");
const schema = require("./gql/index");

const config = {
  schema,
  playground: {
    endpoint: `/${process.env.STAGE}/graphql` // playground 의 기본 경로
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
}
if ("prod" === process.env.STAGE) { // 프로덕션에서는 playground 비활성화
  config.introspection = false;
  config.playground = false;
}

const server = new ApolloServer(config);

exports.handler = server.createHandler();
