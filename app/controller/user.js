'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  // 登录功能
  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;

    const userInfo = await ctx.service.user.login(username)
    if (!userInfo || !userInfo.id) {
      ctx.body = {
        code: 500,
        msg: '账号不存在',
        data: null
      }
      return;
    }
    if (userInfo && password !== userInfo.password) {
      ctx.body = {
        code: 500,
        msg: '用户名和密码不匹配',
        data: null
      }
      return;
    }
    const token = app.jwt.sign({
      id: userInfo.id,
      username: userInfo.username,
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // token有效期为24小时
    }, app.config.jwt.secret);
    ctx.body = {
      code: 200,
      msg: '登陆成功!',
      token,
      job: userInfo.job
    }
  }
  // 注册
  async register() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    console.log(ctx.request.body);
    if(!username || !password) {
      ctx.body = {
        code: 500,
        msg: '用户名或密码不能为空',
        data: null
      }
      return;
    } 
    const userInfo = await ctx.service.user.getUserByName(username);
    if(userInfo && userInfo.id) {
      ctx.body = {
        code: 500,
        msg: '用户名已被注册，请重新输入',
        data: null
      }
      return
    }
    let result = await ctx.service.user.register(ctx.request.body)
    if(result) {
      ctx.body = {
        code: 200,
        msg: '注册成功!',
        data: null
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '注册失败!',
        data: null
      }
    }
  }
}

module.exports = UserController;
