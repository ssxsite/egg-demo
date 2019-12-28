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
        console.log('putTest',ctx.params.id);
        const {id} = ctx.params;
        ctx.body = {
            id
        }
    }

    /* delete 方法用来修改数据 */
    async deleteTest() {
        const { ctx } = this;
        console.log('deleteTest',ctx.params.name);
        const {name} = ctx.params;
        ctx.body = {
            name
        }
    }
}

module.exports = HttpMethodsTestController;
