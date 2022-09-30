const { ObjectUnsubscribedError } = require('rxjs');
const { getDatabase } = require('./mongo');
const { ObjectID } = require('mongodb');
const collectionName = 'news';

async function getNews() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function insertNews(news) {
  const database = await getDatabase();
  const { insertId } = await database.collection(collectionName).insertOne(news);
  return insertId;
}

async function deleteNews(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({ _id: new ObjectID(id) });
}

async function updateNews(news, id) {
  const database = await getDatabase();
  const queryToUpdate = { _id: new ObjectID(id) };
  const newValues = { $set: { title: news.title, content: news.content, img: news.img, createdAt: news.createdAt } };
  await database.collection(collectionName).updateOne(queryToUpdate, newValues, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}

async function findById(id) {
  const database = await getDatabase();
  return await database.collection(collectionName).find({ _id: new ObjectID(id) }).toArray();
}

module.exports = {
  getNews,
  insertNews,
  deleteNews,
  updateNews,
  findById,
}
