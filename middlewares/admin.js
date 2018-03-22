module.exports = function(req, res, next) {

  var adminrole = 'administrator';

    if (req.scopes.indexOf("administrator") > -1) {

        console.log('ADMIN credential');
        next();
        return;

    } else {
      console.log("Not authorized");
      res.status(403).send({'error': 'Not authorized'});
      return;
    }

}
