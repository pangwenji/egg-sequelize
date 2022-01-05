/* eslint-disable jsdoc/require-param */
'use strict';
/* eslint-disable no-unused-vars */
const BaseService = require('./base');
class UsersService extends BaseService {
  /**
     * 查询所有
     */
  async findAll() {
    const data = await this.findAll('Users');
    const total = await this.count();
    return {
      total, data,
    };
  }
  /**
     * 根据ID查询单条
     */
  async findById(id) {
    return await this.findById('Users', id);
  }
  /**
     * 添加数据
     */
  async add(json) {
    return this.add(json);
  }
  /**
     * 编辑数据
     */
  async edit(json) {
    const data = await this.edit('Users', json);
    if (!data) {
      return '传入Id有误';
    }
    return data;
  }
  /**
     * 删除数据
     */
  async delete(id) {
    const data = await this.delete('Users', id);
    if (!data) {
      return '传入Id有误';
    }
    return data;
  }
}
module.exports = UsersService;
