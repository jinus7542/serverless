"use strict";

async function main(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
        event: event,
        context: context,
      },
    ),
  };
}

exports.handler = main;
