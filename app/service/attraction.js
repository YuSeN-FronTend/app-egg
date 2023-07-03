'use strict';

const Service = require('egg').Service;

class AttractionService extends Service {
    async getAttractionInfo(data) {
        const { app } = this;
        if (!data) {
            const attractionInfo = await app.mysql.query('select * from attractions');
            return attractionInfo;
        } else {
            try {
                let sql = `select * from attractions where position like '%${data.position}%'`
                const attractionInfo = await app.mysql.query(sql);
                return attractionInfo;
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    }
}

module.exports = AttractionService;
