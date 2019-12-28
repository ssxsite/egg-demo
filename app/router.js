'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/search/:id/:name', controller.product.search);
  router.get('/npm', controller.npm.index);
  router.post('/httpMethodsTest/post', controller.httpMethodsTest.postTest);
  router.put('/httpMethodsTest/put/:id', controller.httpMethodsTest.putTest);
  router.delete('/httpMethodsTest/delete/:name', controller.httpMethodsTest.deleteTest);
};
