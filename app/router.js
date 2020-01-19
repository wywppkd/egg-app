'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 文章
  router.get('/posts', controller.posts.index);
  router.post('/posts', controller.posts.create);

  // 指定文章
  router.get('/posts/:id', controller.posts.showPostsById);
  router.put('/posts/:id', controller.posts.updatePostsById);
  router.delete('/posts/:id', controller.posts.deletePostsById);
};
