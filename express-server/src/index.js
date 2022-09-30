// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { startDatabase } = require('./database/mongo');
const { insertNews, getNews, deleteNews, updateNews, findById } = require('./database/news')

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

// start the database
startDatabase().then(async () => {
  // start the server
  app.listen(3001, async () => {
    console.log('listening on port 3001');
  });
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
  res.send(await findById(req.params.id));
});

