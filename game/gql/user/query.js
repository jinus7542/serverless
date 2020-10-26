"use strict";

async function users(parent, args, context, info) {
  return [{
    id: 1,
    name: "jinus"
  }];
}

module.exports = {
  users,
};
