'use strict';

module.exports = function(app){
    const IndexController = {
        index: function(req, res){
            res.render('index', { title: 'Encurtador de URL' });
        }
    };
    return IndexController;
};