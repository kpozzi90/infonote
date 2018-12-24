const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

router
  .route('/email')
  .post(controller.sendEmail)

module.exports = router;