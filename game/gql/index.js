"use strict";

const fs = require("fs");
const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");

let typeDefs = "";
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (-1 === file.indexOf("."));
  })
  .forEach((file) => {
    typeDefs += fs.readFileSync(path.join(__dirname, file, "type.gql"));
  });

const Query = {};
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") === -1);
  })
  .forEach((file) => {
    const func = require(path.join(__dirname, file, "query.js"));
    for (const [key, value] of Object.entries(func)) {
      Query[key] = value;
    }
  });

const Mutation = {};
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") === -1);
  })
  .forEach((file) => {
    const func = require(path.join(__dirname, file, "mutation.js"));
    for (const [key, value] of Object.entries(func)) {
      Mutation[key] = value;
    }
  });

const resolvers = {
  Query,
  Mutation,
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
