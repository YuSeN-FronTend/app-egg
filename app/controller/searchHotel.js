'use strict';

const Controller = require('egg').Controller;

class SearchHotelController extends Controller {
  async searchHotel() {
    const { ctx } = this;

    const hotelInfo = await ctx.service.searchHotel.searchHotel(ctx.query);
    if (hotelInfo) {
      ctx.body = {
        code: 200,
        msg: '查询成功!',
        data: hotelInfo
      }
      return;
    } else {
      ctx.body = {
        code: 500,
        msg: '暂无该城市信息',
        data: null
      }
      return;
    }
  }
}

module.exports = SearchHotelController;
