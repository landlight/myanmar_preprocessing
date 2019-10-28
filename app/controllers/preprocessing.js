const segmentationService = require('../services/segmentation');
const preprocessingService = require('../services/preprocessings');
const syllable = require('../services/syllable_breaker');
const json_error = require('../services/json_error');

const singleSegmentation = async (req, res, next) => {
    try {
        let results = [];
        let segmented = segmentationService.segment(req.body.text);
        segmented.forEach(e => {
            if (!preprocessingService.isWhiteSpace(e) && !preprocessingService.isMMStop(e)) {
                results.push(e);   
            }
        })
        return res.json(results);
    } catch (err) {
        json_error.DefaultError(err, res);
    }
}

const syllableSegmentation = async (req, res, next) => {
    try {
        let results = syllable(req.body.text);
        return res.json(results);
    } catch (err) {
        json_error.DefaultError(err, res);
    }
}

module.exports = {
    singleSegmentation,
    syllableSegmentation
}