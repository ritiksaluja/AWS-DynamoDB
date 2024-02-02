import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();


const params = {
    RequestItems : {
        Article : {
            Keys: [
                { article_id: { N: "6" } , publish_Date: { S: '2024-02-02' } },
                { article_id: { N: "7" } , publish_Date: { S: '2024-02-02' } },
                { article_id: { N: "8" } , publish_Date: { S: '2024-02-02' } },
            ]
        }
    }

}



dynamoDb.batchGetItem(params , (err , data )=>{
    err?console.log(err):console.log(data.Responses.Article)
})