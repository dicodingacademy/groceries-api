// import { getAll as getAllGroceries } from '../libs/groceries.js';
// import config from '../libs/config.js';
const { getAll: getAllGroceries } = require('../libs/groceries.js');
const config = require('../libs/config.js');

const handler = async (event) => {
  if (!(event.httpMethod === 'GET')) {
    return {
      statusCode: 405,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'Only GET method allowed',
      }),
    };
  }

  const groceries = await getAllGroceries();

  return {
    statusCode: 201,
    headers: config.functions.headers,
    body: JSON.stringify({
      message: 'Groceries retrieved successfully',
      groceries,
    }),
  };
};

// export { handler };
exports.handler = handler;
