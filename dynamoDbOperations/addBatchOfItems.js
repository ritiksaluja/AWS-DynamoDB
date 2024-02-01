import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();

let params = {
    RequestItems : {
        Article: [
            {
                PutRequest : {
                    Item: {
                        'article_id': { N: '6' },  
                        'title': { S: 'third book1' },  
                        'author': { S: 'ritik' },  
                        'publish_Date': { S: '2024-02-02' }  
                    }
                }
            } , 
            {
                PutRequest : {
                    Item: {
                        'article_id': { N: '7' },  
                        'title': { S: 'third book1' },  
                        'author': { S: 'ritik' },  
                        'publish_Date': { S: '2024-02-02' }  
                    }
                }
            } , 
            {
                PutRequest : {
                    Item: {
                        'article_id': { N: '8' },  
                        'title': { S: 'third book1' },  
                        'author': { S: 'ritik' },  
                        'publish_Date': { S: '2024-02-02' }  
                    }
                }
            }
        ]
    }
}

dynamoDb.batchWriteItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });