let segmentationService = require('../services/segmentation');

const singleSegmentation = async (req, res, next) => {
    try {
        let results = segmentationService.segment(req.body.text);
        return res.json(results);
    } catch (err) {
        return res.json(err);
    }
}

module.exports = {
    singleSegmentation
}