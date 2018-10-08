// === import node modules ===
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

// === import local files ===
const morganConfig = require('./middleware/morgan.js');

// === initialize server ===
const app = express();
const ORIGIN = process.env.origin || 'url_where_requests_should_initiate';

// === specify middleware ===
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan(morganConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: [ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(compression());

// === set up routing ===
app.get('/', (req, res) => {
  res.json({
    status: 'My API is alive!',
  });
});

module.exports = app;
