sls create --template aws-nodejs --path game
sls deploy --stage dev
sls info
sls remove

https://cm20t741c6.execute-api.ap-northeast-2.amazonaws.com/dev/graphql
query {
  hello
}
