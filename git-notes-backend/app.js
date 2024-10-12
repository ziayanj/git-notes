const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://git-gists-tracker.vercel.app"
        : "http://localhost:3000",
  })
);

app.use('/', indexRouter);

module.exports = app;
