const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

router
  .route('/test')
  .get(controller.getFunction)

module.exports = router;