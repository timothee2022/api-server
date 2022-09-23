'use strict';

const express = require('express');
const router = express.Router();
const { clothesModel } = require('../models/clothes');
const validator = require('../middleware/validator');

//Create
router.get('/clothes', validator, async (req, res, send)  => {
try {
  let clothes = await clothesModel.findAll();
  res.status(200).send(clothes);
} catch (error) {
  next(error);
}
});

