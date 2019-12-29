/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577446874283_4142';

  // add your middleware config here
  config.middleware = [];

  //关闭post请求的csrf安全验证
  config.security = {
        csrf: {
            enable: false,
        },
    };

  config.mysql={
    //database configuration
    client:{
      //host
      host:'localhost',
      //port
      port:'3306',
      //username
      user:'root',
      //password
      password:'ssxdmysqldl123',
      //database
      database:'exam'
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app:false,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent:false,
  };
  config.view ={
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
