'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/UserSerializer');

function buildBeans() {

  const beans = {
    accessTokenManager: new JwtAccessTokenManager(),
    userSerializer: new UserSerializer(),
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    throw new Error('Add In Memory support');
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    throw new Error('Add MongoDB support');
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    const UserRepository = require('../repositories/UserRepository');
    beans.userRepository = new UserRepository();
  } else {
    const UserRepositorySQLite= require('../repositories/UserRepositorySQLite');
    beans.userRepository = new UserRepositorySQLite();
  }

  return beans;
}

module.exports = buildBeans();
