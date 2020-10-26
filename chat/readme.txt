sls create --template aws-nodejs --path chat
sls deploy --stage dev
sls info
sls remove

wscat -c wss://o6nrcefenj.execute-api.ap-northeast-2.amazonaws.com/dev
{"route":"index","message":"hello world!"}
