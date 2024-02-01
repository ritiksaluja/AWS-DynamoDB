import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });
const dynamoDb = new AWS.DynamoDB();


const params = {
    TableName : 'Article'
}

dynamoDb.describeTable(params , (err , data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
        console.log("rs" , data.Table.KeySchema);
    }
})