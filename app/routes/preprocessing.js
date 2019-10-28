var preprocessingController = require('../controllers/preprocessing');

var express = require('express');
var router = express.Router();

router.route('/single_segment')
      .post(preprocessingController.singleSegmentation);

router.route('/syllable_segment')
      .post(preprocessingController.syllableSegmentation);
      
module.exports = router;