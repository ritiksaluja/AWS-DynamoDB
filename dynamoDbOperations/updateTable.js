import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();

const params = {
    ProvisionedThroughput : {
        ReadCapacityUnits : 3 , 
        WriteCapacityUnits : 3
    } , 
    TableName : 'Article'
}

dynamoDb.updateTable (params , (err , data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})