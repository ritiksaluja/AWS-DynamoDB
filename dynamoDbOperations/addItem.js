import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();



const params = {
    TableName: 'Article',
    Item: {
        'article_id': { N: '5' },  
        'title': { S: 'third book1' },  
        'author': { S: 'ritik' },  
        'publish_Date': { S: '2024-02-02' }  
    }
};

dynamoDb.putItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success");
    }
});
