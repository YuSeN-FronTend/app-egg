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

//配置jwt
  config.jwt = {
    secret: '12345678' //加密密钥
  }
  // 配置跨域
  config.cors = {
    // 允许请求的来源，为*表示允许所有IP请求
    origin: '*',
    // 允许请求的方式
    allowMethods: "GET, HEAD, PUT, POST, DELETE, PATCH",
    credentials: true
  }

  config.security = {
    // 配置对象安全性上定义白名单域属性
    domainWhiteList: ['*'],
  // 关闭csrf验证
    csrf: {
      enable: false
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1687759672088_1176';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //数据库
  config.mysql = {
    app: true, // 是否挂在到APP下
    agent: false, // 是否挂载到代理下
    client: { // 连接数据库信息
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'ys20011008.',
      database: 'appform'
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
