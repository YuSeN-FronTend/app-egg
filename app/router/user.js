'use script'

module.exports = app => {
    const { router, controller } = app;
    router.post('/login', controller.user.login);
    router.post('/register', controller.user.register)
}