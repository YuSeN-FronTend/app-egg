'use script';

module.exports = app => {
    const { router, controller } = app;

    router.post('/addCollect', controller.collect.addCollect)
    router.post('/quitCollect', controller.collect.quitCollect)
    router.get('/getCollectInfo', controller.collect.getCollectInfo)
}