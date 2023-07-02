'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 连接数据库
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  // token鉴权的插件引入
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  // 引入跨域插件cors
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
