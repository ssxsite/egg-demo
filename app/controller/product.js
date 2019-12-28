'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, test-Controller';
  }
  async detail() {
    const { ctx } = this;
    ctx.body = `detail id: ${ctx.query.id}，ctx.query: ${ctx.query}`;
    console.log(ctx.query);
  }
  async search() {
    const { ctx } = this;
    ctx.body = `search id: ${ctx.params.id},search name:${ctx.params.name}，ctx.params: ${ctx.params}`;
    console.log(ctx.params);
  }
}

module.exports = ProductController;
