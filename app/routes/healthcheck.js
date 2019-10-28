var healthcheckController = require('../controllers/healthCheck');

var express = require('express');
var router = express.Router();

router.route('/healthcheck')
      .get(healthcheckController.healthcheck);

module.exports = router;