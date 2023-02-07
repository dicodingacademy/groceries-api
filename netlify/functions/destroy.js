import { destroy as destroyGroceries, getById as getByIdGroceries } from '../libs/groceries.js';
import config from '../libs/config.js';

const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: config.functions.headers,
    };
  }

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

  console.log('event.httpMethod', event.httpMethod);
  if (!(event.httpMethod === 'DELETE')) {
    return {
      statusCode: 405,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'Only DELETE method allowed',
      }),
    };
  }

  const grocery = await getByIdGroceries(id);
  if (!(grocery instanceof Object)) {
    return {
      statusCode: 404,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: `No data with id ${id}`,
      }),
    };
  }

  const deletedGrocery = await destroyGroceries(id);

  return {
    statusCode: 201,
    headers: config.functions.headers,
    body: JSON.stringify({
      error: false,
      message: `Grocery with id ${id} deleted successfully`,
      grocery: deletedGrocery,
    }),
  };
};

export { handler };
