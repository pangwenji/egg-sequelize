/* eslint-disable jsdoc/require-param */
'use strict';
/* eslint-disable no-unused-vars */
const Controller = require('egg').Controller;
class BaseController extends Controller {
  /**
     * 成功
     */
  async success(data, message, code = 200) {
    const { ctx } = this;
    ctx.body = {
      code,
      message,
      data,
    };
  }
  /**
     * 错误
     */
  async error(message, code = 403) {
    const { ctx } = this;
    ctx.body = {
      code,
      message,
    };
  }
}

module.exports = BaseController;
