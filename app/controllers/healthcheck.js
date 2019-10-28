response_services = require('../services/json_response');

const healthcheck = async (req, res, next) => {
    console.log('get?')
    return response_services.Success(res);
}

module.exports = {
    healthcheck
}