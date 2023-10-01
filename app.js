const express = require('express');
const morgan = require('morgan');
const { noRouteHandler, errorHandler } = require('./server/errors/errorHandler');
const allRoutes = require('./server/routes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/', allRoutes);

app.use(noRouteHandler);

app.use(errorHandler);

module.exports = app;
