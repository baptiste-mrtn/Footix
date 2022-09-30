const { MongoClient } = require('mongodb');
const connectionString = 'mongodb://localhost:27017';
let database = null;

async function startDatabase() {
  const connection = await MongoClient.connect(connectionString, { useNewUrlParser: true });
  database = connection.db('footix');
}

async function getDatabase() {
  if (!database) {
    await startDatabase();
  }
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};
