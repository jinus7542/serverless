"use strict";

async function main(event, context) {
  console.log("$connect handler", JSON.stringify(event, null, 2));
  console.log("$connect handler", JSON.stringify(context, null, 2));
  
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: '$disconnect',
        event: event,
        context: context,
      },
    ),
  };
}

exports.handler = main;
