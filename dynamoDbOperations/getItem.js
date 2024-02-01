import AWS from 'aws-sdk';

AWS.config.update({ region: 'eu-north-1' });

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Article',
  Key: {
    article_id: 3,  
    publish_Date: '02-02-2024',  
  },
  ProjectionExpression: 'title',
};

dynamoDb.get(params, function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.Item);
  }
});
