'use strict';

const Service = require('egg').Service;

class CollectService extends Service {
    // 判断收藏的信息是否存在
    async judgeCollectInfo(route) {
        try {
            const { app } = this;
            const collectInfo = await app.mysql.get('collectform', { route });
            return collectInfo;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    // 添加收藏信息
    async addCollect(data) {
        const { app } = this;
        const collectInfo = await app.mysql.insert('collectForm', data);
        return collectInfo;
    }
    // 取消收藏
    async quitCollect(route) {
        const { app } = this;

        const collectInfo = await app.mysql.delete('collectForm', { route });
        return collectInfo;
    }
    // 获取收藏列表
    async getCollectInfo(data) {
        console.log(data);
        const { app } = this;
        if (!data) {
            const collectInfo = await app.mysql.query('select * from collectForm');
            return collectInfo;
        } else {
            try {
                // 单列查询
                let sql = `select * from collectForm where hotelName like '%${data.info}%'`
                // 多条查询
                // let sql = `select * from collectForm where abc like '%${data.info}%' or efg like '%${data.info}%'`
                const collectInfo = await app.mysql.query(sql)
                return collectInfo
            } catch (error) {
                console.log(error);
                return null;
            }
        }

    }
    // 判断当前页面是否被收藏
    async getCollectStatus(data) {
        const { app } = this;

        const collectStatus = await app.mysql.query(`select * from collectform where route like '%${data.homeId}%'`)
        return collectStatus;
    }
}

module.exports = CollectService;
