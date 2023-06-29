'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(username) {
    const { ctx, app } = this;
    // 从数据库中根据用户名查询数据
    const userInfo = await app.mysql.get('user', { username });
    return userInfo;
  }
  // 检测用户名是否存在
  async getUserByName(username) {
    try {
      const result = await this.app.mysql.get('user', { username })
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 向数据库中添加新注册的账号
  async register(registerInfo) {
    try{
      const result = await this.app.mysql.insert('user', registerInfo);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = UserService;
