// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { startDatabase } = require('./database/mongo');
const { insertNews, getNews, deleteNews, updateNews, findNewsById } = require('./database/news')
const { insertReviews, getReviews, deleteReviews, updateReviews, findReviewsById } = require('./database/reviews')

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// start the database
startDatabase().then(async () => {
  // start the server
  app.listen(3001, async () => {
    console.log('listening on port 3001');
  });
});

// ---- NEWS ----

// return all news
app.get('/news', async (req, res) => {
  res.send(await getNews());
});

// add a new news
app.post('/news/add', async (req, res) => {
  const newNews = req.body;
  await insertNews(newNews);
  res.send({ message: 'New News inserted.' });
});

// delete a news
app.delete('/news/delete/:id', async (req, res) => {
  await deleteNews(req.params.id);
  res.send({ message: 'News removed.' });
});

// update a news
app.put('/news/edit/:id', async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  await updateNews(req.body, req.params.id);
  res.send({ message: 'News updated.' })
})

app.get('/news/:id', async (req, res) => {
  res.send(await findNewsById(req.params.id));
});


// ---- REVIEWS ----

// return all reviews
app.get('/reviews', async (req, res) => {
  res.send(await getReviews());
});

// add a new reviews
app.post('/reviews/add', async (req, res) => {
  const newReviews = req.body;
  await insertReviews(newReviews);
  res.send({ message: 'New Reviews inserted.' });
});

// delete a reviews
app.delete('/reviews/delete/:id', async (req, res) => {
  await deleteReviews(req.params.id);
  res.send({ message: 'Reviews removed.' });
});

// update a reviews
app.put('/reviews/edit/:id', async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  await updateReviews(req.body, req.params.id);
  res.send({ message: 'Reviews updated.' })
})

app.get('/reviews/:id', async (req, res) => {
  res.send(await findReviewsById(req.params.id));
});


