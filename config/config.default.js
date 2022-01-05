/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639560323757_2216';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    post: 3360,
    database: 'egg-mysql',
    username: 'root',
    password: 'root',
  };
  config.cors = {
    credentials: true,
    origin: '*',
    allowMethods: 'GET,PUT,POST,DELETE,OPTIONS,HEADER',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
