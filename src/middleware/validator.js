'use strict';

const serverError = require('../error-handlers/500');

const validator = (req, res, next) => {
  let { name } = req.body;

  // console.log('this is the name', name);
  try {
    if (name) {
      next();
    } else {
      serverError();
    }
  } catch (error) {
    console.log('I am here', error.message);
    next(error.message);
  }
};

module.exports = validator;