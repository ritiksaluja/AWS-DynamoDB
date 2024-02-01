import AWS from 'aws-sdk';
AWS.config.update({ region: "eu-north-1" });

const dynamoDb = new AWS.DynamoDB();

var params = {
    TableName: "Article",
    Key: {
        article_id: { N: "1" },
        publish_Date:{S:'01-02-2024'} 
    },
  };
  
  
  dynamoDb.deleteItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });