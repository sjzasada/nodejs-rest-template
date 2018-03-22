var config = {};

config.profile = {};

config.profile.apikey = "1234567";
config.profile.publickey = "/usr/src/app/public_key.pem";
config.profile.audience="jwtaudience";
config.profile.mongourl='mongodb://mongo/Tododb';
config.profile.port=3100;
module.exports = config;
