'use strict';

const Service = require('egg').Service;

class SearchHotelService extends Service {
  async searchHotel(data) {
    const { app } = this;
    const hotelInfo = await app.mysql.query(`select * from searchHotel where cityName like '%${data.cityName}%'`);
    return hotelInfo;
  }
}

module.exports = SearchHotelService;
