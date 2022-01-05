'use strict';
/* eslint-disable no-unused-vars */
const Service = require('egg').Service;
class BaseService extends Service {
  // 查询全部数据
  async findAll(modelName) {
    const { ctx, app } = this;
    try {
      return await ctx.model[modelName].findAll();
    } catch (error) {
      return this.error();
    }
  }
  // 查询数据总数
  async count(modelName) {
    const { ctx } = this;
    try {
      return await ctx.model[modelName].count();
    } catch (error) {
      return this.error();
    }
  }
  // 根据ID查询数据
  async findById(modelName, id) {
    const { ctx } = this;
    try {
      return await ctx.model[modelName].findByPk(id);
    } catch (error) {
      return this.error();
    }
  }
  async edit(modelName, json) {
    const { ctx } = this;
    try {
      const result = await ctx.model[modelName].findByPk(json.id);
      if (!result) {
        return false;
      }
      const isUpdate = await result.update({ ...json });
      console.log(isUpdate);
      return true;
    } catch (error) {
      this.error();
    }
  }
  // 删除某一条数据
  async delete(modelName, key) {
    const { ctx } = this;
    try {
      const result = await ctx.model[modelName].findByPk(key);
      if (!result) {
        return false;
      }
      await result.destroy();
      return true;
    } catch (error) {
      this.error();
    }
  }
  // 错误处理方法
  error() {
    return 'Service error';
  }
}
module.exports = BaseService;
