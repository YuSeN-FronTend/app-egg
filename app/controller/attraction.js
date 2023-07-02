'use strict';

const Controller = require('egg').Controller;

class AttractionController extends Controller {
  // 获取/查询景点信息
  async getAttractionInfo() {
    const { ctx } = this;

    if(JSON.stringify(ctx.query) === '{}') {
        const attractionInfo = ctx.service.attraction.getAttractionInfo();
        console.log(attractionInfo);
    }
  }
}

module.exports = AttractionController;
