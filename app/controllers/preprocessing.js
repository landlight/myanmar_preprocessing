let segmentationService = require('../services/segmentation');
let preprocessingService = require('../services/preprocessings');

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
        return res.json(err);
    }
}

module.exports = {
    singleSegmentation
}