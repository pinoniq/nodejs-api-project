const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');
const path = require('path');

const config = require('./config');

const mainRouter = require('./src/router');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use('/', mainRouter);
app.use(express.static(path.join(__dirname, '../app/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../app/public/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

app.listen(config.port);
