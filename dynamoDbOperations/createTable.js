import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();

const params = {
    TableName : 'Article2' , 
    KeySchema : [
        {
            AttributeName : 'title' , 
            KeyType : 'HASH'
        } , 
        {
            AttributeName : 'Author' , 
            KeyType : 'RANGE'
        }
    ] , 
    AttributeDefinitions : [
        {
            AttributeName : 'title' ,
            AttributeType : 'S' ,
        }
        , 
        {
            AttributeName : 'Author' ,
            AttributeType : 'S' ,
        }

    ] , 
    ProvisionedThroughput : {
        ReadCapacityUnits : 3 , 
        WriteCapacityUnits : 3
    }
}

dynamoDb.createTable (params , (err , data)=>{
    err?console.log(err): console.log(data)
})