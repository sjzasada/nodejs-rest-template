var jwt = require('jsonwebtoken');
var util = require('util');

module.exports = function(req, res, next) {

	// check header or url parameters or post parameters for token

	var auth_header = req.get('Authorization');

	if (auth_header) {
		var token = auth_header.substring(7);
	}

	// decode token
	if (typeof token !== 'undefined' && token && token.trim() && token !== 'undefined') {

        console.log("Token:" + token);
				var config = req.app.get('config');

        try {
          var decoded = jwt.verify(token, req.app.get('jwtcert'), { audience: config.profile.audience, algorithms: ['RS512'] });

					if (decoded.sub) {
						req.user=decoded.sub;
						req.roles=decoded.role;
						console.log("Found user "+req.user);

						next();
						return;
					}

					res.status(403).send({'error': 'Invalid token'});
	        return;

      } catch(err) {
        console.log(err);
				res.status(403).send({'error': 'Invalid token'});
        return;
        }

	} else {
    console.log("Token not found");
		res.status(403).send({'error': 'Token not found'});
    return;
	}

}
