'use strict';

const Controller = require('egg').Controller;

class HttpMethodsTestController extends Controller {
    async postTest() {
        const { ctx } = this;
        console.log('postTest',ctx.request.body);
        const {name,weight} = ctx.request.body;
        ctx.body = {
            name,
            weight
        }
    }
    /* put 方法用来修改数据 */
    async putTest() {
        const { ctx } = this;
        console.log('putTest',ctx.request.body);
        const {name,weight} = ctx.request.body;
        ctx.body = {
            name,
            weight
        }
    }
}

module.exports = HttpMethodsTestController;
