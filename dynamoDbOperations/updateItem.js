import AWS from 'aws-sdk';

AWS.config.update({ region: 'eu-north-1' });

const dynamoDb = new AWS.DynamoDB();

const params = {
  TableName: 'Article',
  Key: {
    article_id: { N: '3' }, 
    publish_Date: { S: '02-02-2024' },  
  },
  UpdateExpression: 'SET title = :t',
  ExpressionAttributeValues: {
    ':t': { S: 'super book' },  
  },
  ReturnValues: 'UPDATED_NEW',
};

dynamoDb.updateItem(params, (err, data) => {
  if (err) {
    console.log('Error updating item:', err);
  } else {
    console.log('Item updated successfully:', data);
  }
});
