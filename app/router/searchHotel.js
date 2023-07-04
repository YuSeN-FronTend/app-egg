'use script';

module.exports = app => {
    const { router, controller } = app;

    router.get('/searchHotel', controller.searchHotel.searchHotel)
}