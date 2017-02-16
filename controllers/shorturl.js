'use strict';

module.exports = function(app){
    const ShortUrl = app.models.shorturl;
    const controller = {
        salvaShortUrl: function(req, res){
            ShortUrl.create(req.body).then(
                function(shorturl){
                    // res.status(201).json(shorturl);
                    res.render('preview', {shorturl: shorturl, urlBase: req.headers.origin})
                },
                function(erro){
                    console.erro();
                    res.status(500).json(erro);
                }
            );  
        },
        redirecionar: function(req, res){
            ShortUrl.findOne(req.params, function(err, shorturl){
                if (err){return err;}
                res.redirect(shorturl.url);
            });
            
        }
    };
    return controller;
};