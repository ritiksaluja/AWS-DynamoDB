import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();


const params = {
   BackupArn : 'arn:aws:dynamodb:eu-north-1:003816306961:table/Article/backup/01706856079424-4c950623'
}


dynamoDb.deleteBackup(params , (err , data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})