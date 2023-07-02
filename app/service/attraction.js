'use strict';

const Service = require('egg').Service;

class AttractionService extends Service {
    async getAttractionInfo(data) {
        const { app } = this;
        if(!data) {
            const attractionInfo = await app.mysql.query('select * from attractions');
            return attractionInfo;
        }
  }
}

module.exports = AttractionService;
