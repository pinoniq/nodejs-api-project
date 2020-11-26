const mongodb = require('mongodb');
const config = require('../config');

const MongoClient = mongodb.MongoClient;
let client = null;

module.exports = async () => {
  if (!client) {
    client = await MongoClient.connect(
      config.mongo.connectionString,
    );
  }

  return client.db(config.mongo.path);
}
