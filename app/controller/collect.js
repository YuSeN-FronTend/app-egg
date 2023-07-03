'use strict';

const Controller = require('egg').Controller;

class CollectController extends Controller {
    // 添加收藏
    async addCollect() {
        const { ctx } = this;
        const collectBoolean = await ctx.service.collect.judgeCollectInfo(ctx.request.body.route);
        if (collectBoolean && collectBoolean.id) {
            ctx.body = {
                code: 500,
                msg: '无需重复收藏!',
                data: null
            }
            return
        } else {
            const collectInfo = await ctx.service.collect.addCollect(ctx.request.body);
            if (collectInfo && collectInfo.insertId) {
                ctx.body = {
                    code: 200,
                    msg: '收藏成功!',
                    data: null
                }
                return
            }
        }
    }
    // 取消收藏
    async quitCollect() {
        const { ctx } = this;
        const collectBoolean = await ctx.service.collect.judgeCollectInfo(ctx.query.homeId);
        if (!collectBoolean || !collectBoolean.id) {
            ctx.body = {
                code: 500,
                msg: '此信息并不在收藏列表中,无需取消收藏!',
                data: null
            }
            return
        } else {
            const collectInfo = await ctx.service.collect.quitCollect(ctx.query.homeId);
            if (collectInfo) {
                ctx.body = {
                    code: 200,
                    msg: '取消收藏成功!',
                    data: null
                }
                return
            }
        }
    }
    // 获取或查找收藏列表信息
    async getCollectInfo() {
        const { ctx } = this;
        if (JSON.stringify(ctx.query) === '{}') {
            // 获取所有信息
            const collectInfo = await ctx.service.collect.getCollectInfo();
            if (collectInfo) {
                ctx.body = {
                    code: 200,
                    msg: '获取成功!',
                    data: collectInfo
                }
                return
            }
        } else {
            // 查找信息
            const collectInfo = await ctx.service.collect.getCollectInfo(ctx.query);
            if(collectInfo.length) {
                ctx.body = {
                    code: 200,
                    msg: '查询成功!',
                    data: collectInfo
                }
                return;
            } else {
                ctx.body = {
                    code: 500,
                    msg: '没有相关数据!',
                    data: null
                }
                return;
            }
        }
    }
    // 判断当前页面是否为收藏状态
    async getCollectStatus() {
        const { ctx } = this;
        const collectInfo = await ctx.service.collect.getCollectStatus(ctx.query);
        if (collectInfo.length) {
            ctx.body = {
                code: 200,
                msg: '该商品已被收藏!',
                data:{
                    status: true,
                }
            }
            return;
        } else {
            ctx.body = {
                code: 500,
                msg: '该商品没被收藏!',
                data: {
                    status: false
                }
            }
            return;
        }
    }
}

module.exports = CollectController;
