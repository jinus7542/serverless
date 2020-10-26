"use strict";

async function adduser(parent, args, context, info) {
  return {
    id: args.id,
    name: args.name,
  };
}

module.exports = {
  adduser,
};
