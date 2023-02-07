// import { update as updateGroceries } from '../libs/groceries.js';
// import config from '../libs/config.js';
const { update: updateGroceries, getById: getByIdGroceries } = require('../libs/groceries.js');
const config = require('../libs/config.js');

const handler = async (event) => {
  const { path } = event;
  const pathSliced = path.slice(11);
  const pathSlicedSplitted = pathSliced.split('/');
  let id = pathSlicedSplitted[pathSlicedSplitted.length - 1];

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

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: config.functions.headers,
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
      statusCode: 404,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'No data provided',
      }),
    };
  }

  const grocery = await getByIdGroceries(id);
  if (!(grocery instanceof Object)) {
    return {
      statusCode: 400,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: `No data with id ${id}`,
      }),
    };
  }

  const { name, quantity } = JSON.parse(event.body);
  const updatedGrocery = await updateGroceries(id, { name, quantity });

  return {
    statusCode: 201,
    headers: config.functions.headers,
    body: JSON.stringify({
      error: false,
      message: `Grocery with id ${id} updated successfully`,
      grocery: updatedGrocery,
    }),
  };
};

// export { handler };
exports.handler = handler;
