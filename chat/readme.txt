sls deploy --stage dev
sls info

wscat -c wss://o6nrcefenj.execute-api.ap-northeast-2.amazonaws.com/dev
{"route":"index","message":"hello world!"}

sls remove
