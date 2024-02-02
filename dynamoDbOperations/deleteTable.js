import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();

const params = {
    TableName : 'Article'
}

dynamoDb.deleteTable(params , (err, data)=>{
    err?console.log(err):console.log(data)
})