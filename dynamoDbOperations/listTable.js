import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();

dynamoDb.listTables((err , data)=>{
   if(err){
    console.log(err)
   }
   else{
    console.log(data)
   }
})