"use strict";

async function hello(parent, args, context, info) {
  const headers = context.headers;
  const fname = context.functionName;
  const evt = context.event;
  const ctx = context.context;

  return JSON.stringify({
    message: "hello root-resolver!",
    forwarded: headers["X-Forwarded-For"],
    date: new Date(),
  })
}

module.exports = {
  hello,
};
