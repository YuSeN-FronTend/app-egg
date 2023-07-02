'use strict';

const Service = require('egg').Service;

class CollectService extends Service {
    // 判断收藏的信息是否存在
    async judgeCollectInfo(abc) {
        try {
            const { app } = this;
            const collectInfo = await app.mysql.get('collectForm', { abc });
            return collectInfo;
        } catch (error) {
            console.log(error);
        }
    }
    // 添加收藏信息
    async addCollect(data) {
        const { app } = this;

        const collectInfo = await app.mysql.insert('collectForm', data);
        return collectInfo;
    }
    // 取消收藏
    async quitCollect(abc) {
        const { app } = this;

        const collectInfo = await app.mysql.delete('collectForm', { abc });
        return collectInfo;
    }
    // 获取收藏列表
    async getCollectInfo(data) {
        const { app } = this;
        if (!data) {
            const collectInfo = await app.mysql.query('select * from collectForm');
            return collectInfo;
        } else {
            // 单列查询
            let sql = `select * from collectForm where abc like '%${data.info}%'`
            // 多条查询
            // let sql = `select * from collectForm where abc like '%${data.info}%' or efg like '%${data.info}%'`
            try {
                const collectInfo = await app.mysql.query(sql)
                return collectInfo
            } catch (error) {
                console.log(error);
                return null;
            }
        }

    }
}

module.exports = CollectService;
