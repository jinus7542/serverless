sls deploy --stage dev
sls info

https://cm20t741c6.execute-api.ap-northeast-2.amazonaws.com/dev/graphql
query {
  hello
}

sls remove
