
var express = require('express');
var appRouter = express.Router();

let healthcheckRoutes = require('./healthcheck');
let preprocessingRoutes = require('./preprocessing');

appRouter.use(healthcheckRoutes);
appRouter.use('/preprocessings', preprocessingRoutes);

console.log(appRouter, 'app');
module.exports = appRouter;