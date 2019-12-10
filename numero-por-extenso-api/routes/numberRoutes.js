'use strict';
 
const Router = require('express');
const numberRepo = require('../repo/numberRepository');
 
const getNumberRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/:number', (req, res) => {
            const number = parseInt(req.params.number);
            const result = numberRepo.getFullNumber(number);
            res.send(result);
        });
 
    app.use('/', router);
};
 
module.exports = getNumberRoutes;