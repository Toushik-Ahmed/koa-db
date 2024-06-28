const getTodo = require('../query/query');

module.exports.getTodos = async (ctx) => {
  ctx.body = await getTodo.get();
};
