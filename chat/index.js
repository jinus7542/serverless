"use strict";

async function main(event, context) {
  const body = JSON.parse(event.body);
  console.log(body.message);

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: '$index',
        event: event,
        context: context,
      },
    ),
  };
}

exports.handler = main;
