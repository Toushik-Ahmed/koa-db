const posttodo = require('../query/query');

module.exports.postTodo = async (ctx) => {
  const todo = ctx.request.body;

  const result = await posttodo.set(todo);

  ctx.body = result;
};
