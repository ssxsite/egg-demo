const Controller = require('egg').Controller;
class TestController extends Controller {
  async index() {
    const ctx = this.ctx;
    let title = "我是首页"; //向模板传入数据
    //使用模板渲染就不用ctx.body 了
    // ctx.body = await ctx.renderString('{{ name }}', { name: 'local' });
    await ctx.render('index.html',{
      title: title
    });
  }
}

module.exports = TestController;
