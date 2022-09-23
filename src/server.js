'use strict';

require('dotenv').config();
const express = require('express');

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(clothesRouter);