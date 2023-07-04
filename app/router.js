'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/user')(app);
  require('./router/collect')(app);
  require('./router/attraction')(app);
  require('./router/searchHotel')(app)
};
