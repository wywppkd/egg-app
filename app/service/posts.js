'use strict';

const Service = require('egg').Service;

class PostsService extends Service {
  // 展示所有文章
  async index() {
    const list = [
      {
        title: 'nestjs',
        content: '内容...',
      },
    ];
    return list;
  }

  // 创建文章
  async create() {
    const isCreated = true;
    return isCreated;
  }

  // 根据id查询指定文章
  async showPostsById() {
    const data = {
      title: 'hello eggjs',
      content: 'Content...',
    };
    return data;
  }

  // 根据id编辑指定文章
  async updatePostsById() {
    const isUpdated = true;
    return isUpdated;
  }

  // 根据id删除指定文章
  async deletePostsById() {
    const isDeleted = true;
    return isDeleted;
  }
}

module.exports = PostsService;
