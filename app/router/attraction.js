'use script';

module.exports = app => {
    const { router, controller } = app;

    router.get('/attraction', controller.attraction.getAttractionInfo)
}