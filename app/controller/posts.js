'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.logger.info('请求/api/posts');
    const res = await service.posts.index();
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: {
        list: res,
      },
    };
  }

  async create() {
    const { ctx, service } = this;
    try {
      const res = await service.posts.create();
      if (res) {
        ctx.status = 200;
        ctx.body = {
          code: 200,
          msg: 'ok',
        };
      }
    } catch (error) {
      ctx.status = 500;
    }
  }

  async showPostsById() {
    const { ctx, service } = this;
    try {
      const res = await service.posts.showPostsById();
      ctx.status = 200;
      ctx.body = {
        code: 200,
        data: res,
      };
    } catch (error) {
      ctx.status = 500;
    }
  }

  async updatePostsById() {
    const { ctx, service } = this;
    try {
      const res = await service.posts.updatePostsById();
      if (res) {
        ctx.status = 200;
        ctx.body = {
          code: 200,
          msg: 'ok',
        };
      }
    } catch (error) {
      ctx.status = 500;
    }
  }

  async deletePostsById() {
    const { ctx, service } = this;
    try {
      const res = await service.posts.deletePostsById();
      if (res) {
        ctx.status = 200;
        ctx.body = {
          code: 200,
          msg: 'ok',
        };
      }
    } catch (error) {
      ctx.status = 500;
    }
  }
}

module.exports = PostsController;
