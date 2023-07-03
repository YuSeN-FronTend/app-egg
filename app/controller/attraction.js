'use strict';

const Controller = require('egg').Controller;

class AttractionController extends Controller {
    // 获取/查询景点信息
    async getAttractionInfo() {
        const { ctx } = this;
        if (JSON.stringify(ctx.query) === '{}') {
            const attractionInfo = await ctx.service.attraction.getAttractionInfo();
            if (attractionInfo) {
                ctx.body = {
                    code: 200,
                    msg: '获取成功!',
                    data: attractionInfo
                }
                return;
            }
        } else {
            const attractionInfo = await ctx.service.attraction.getAttractionInfo(ctx.query);
            if (attractionInfo.length) {
                ctx.body = {
                    code: 200,
                    msg: '查询成功!',
                    data: attractionInfo
                }
                return
            } else {
                ctx.body = {
                    code: 500,
                    msg: '暂时还没有这个城市景点信息',
                    data: null
                }
                return
            }
        }
    }
}

module.exports = AttractionController;
