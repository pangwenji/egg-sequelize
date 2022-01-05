
/* eslint-disable jsdoc/require-param */
'use strict';
/* eslint-disable no-unused-vars */
const BaseController = require('./base');
class UserController extends BaseController {
  async findAll() {
    const { ctx, service } = this;
    const result = await service.user.findAll();
    this.success(result, 'success');
  }

  async add() {
    const { ctx, service } = this;
    const { username, nickname, avator, sex, age } = ctx.request.body;
    const result = await service.user.edit({
      id: new Date().valueOf(),
      username,
      nickname,
      avator,
      sex,
      age,
    });
    if (result === 'Service error') {
      this.error(0, result);
    }
    this.success(result, 1);
  }
  async findById() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const result = await service.user.findByIds(id);
    this.success(result, 'success');
  }
  async edit() {
    const { ctx, service } = this;
    const { username, nickname, avator, sex, age } = ctx.request.body;
    const result = await service.user.edit({
      username,
      nickname,
      avator,
      sex,
      age,
    });
    if (result === 'Service error') {
      this.error(0, result);
    }
    this.success(result, 1);
  }
  async delete() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const result = await service.user.delete(id);
    if (result === 'Service error') {
      this.error(0, result);
    }
    this.success(result, 1);
  }
}
module.exports = UserController;
