require('dotenv').config();
const pshConfig = require('platformsh-config').config();

let config;

if (!pshConfig.isValidPlatform()) {
  config = {
    port: process.env.PORT,
    mongo: {
      connectionString: process.env.MONGO_CONNECTION,
      path: 'main',
    },
  };
} else {
  const credentials = pshConfig.credentials('mongodb');

  config = {
    port: pshConfig.port,
    mongo: {
      connectionString: pshConfig.formattedCredentials('mongoDB', 'mongoDB'),
      path: credentials.path,
    },
  };
}

module.exports = config;
