import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();


const params = {
    BackupName : 'Article2' , 
    TableName : 'Article'
}


dynamoDb.createBackup(params , (err , data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})