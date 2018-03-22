module.exports = function(req, res, next) {

  var apikey = req.get('x-api-key');

    if (apikey) {
      console.log("API Key "+apikey);

      var config = req.app.get('config');

      if (apikey == config.profile.apikey) {
        console.log('API key match');
        next();
      } else {
        console.log("API key failure");
        res.status(403).send({'error': 'API key failure'});
        return;
      }

    } else {
      console.log("No API key");
      res.status(403).send({'error': ' no API key'});
      return;
    }

}
