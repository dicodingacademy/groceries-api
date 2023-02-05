const { destroyAll: destroyGroceries } = require('../libs/groceries.js');

exports.handler = async () => {
  await destroyGroceries();

  return {
    statusCode: 200,
  };
};
