module.exports = function(app){
  const shorturl = app.controllers.shorturl;
  app.post('/shorturl', shorturl.salvaShortUrl);
  app.get('/:codigo', shorturl.redirecionar);
};