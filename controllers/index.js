'use strict';

module.exports = function(app){
    const IndexController = {
        index: function(req, res){
            res.render('index', { title: 'Url Shortener' });
        }
    };
    return IndexController;
};