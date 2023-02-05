// import { update as updateGroceries } from '../libs/groceries.js';
// import config from '../libs/config.js';
const { update: updateGroceries } = require('../libs/groceries.js');
const config = require('../libs/config.js');

const handler = async (event) => {
  const { path } = event;
  const pathSliced = path.slice(11);
  let id = pathSliced.split('/');

  if (!id) {
    return {
      statusCode: 400,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'No id grocery provided',
      }),
    };
  }

  id = Number(id);

  if (!(typeof id === 'number' && !Number.isNaN(id))) {
    return {
      statusCode: 400,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'Non-number has been provided for id grocery',
      }),
    };
  }

  if (!(event.httpMethod === 'PUT') || !(event.httpMethod === 'PATCH')) {
    return {
      statusCode: 405,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'Only PUT or PATCH method allowed',
      }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'No data provided',
      }),
    };
  }

  const { name, quantity } = JSON.parse(event.body);
  await updateGroceries(id, { name, quantity });

  return {
    statusCode: 201,
    headers: config.functions.headers,
    body: JSON.stringify({
      error: false,
      message: `Grocery with id ${id} updated successfully`,
    }),
  };
};

// export { handler };
exports.handler = handler;
