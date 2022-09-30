const { ObjectUnsubscribedError } = require('rxjs');
const { getDatabase } = require('./mongo');
const { ObjectID } = require('mongodb');
const collectionName = 'reviews';

async function getReviews() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function insertReviews(reviews) {
  const database = await getDatabase();
  const { insertId } = await database.collection(collectionName).insertOne(reviews);
  return insertId;
}

async function deleteReviews(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({ _id: new ObjectID(id) });
}

async function updateReviews(reviews, id) {
  const database = await getDatabase();
  const queryToUpdate = { _id: new ObjectID(id) };
  const newValues = { $set: { title: reviews.title, content: reviews.content, rate: reviews.rate, createdAt: reviews.createdAt } };
  await database.collection(collectionName).updateOne(queryToUpdate, newValues, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}

async function findReviewsById(id) {
  const database = await getDatabase();
  return await database.collection(collectionName).find({ _id: new ObjectID(id) }).toArray();
}

module.exports = {
  getReviews,
  insertReviews,
  deleteReviews,
  updateReviews,
  findReviewsById,
}
