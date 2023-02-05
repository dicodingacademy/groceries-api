import { getById as getByIdGroceries } from '../libs/groceries.js';
import config from '../libs/config.js';

const handler = async (event) => {
  const { path } = event;
  const pathSliced = path.slice(11);
  const id = pathSliced.split('/');

  if (!id) {
    return {
      statusCode: 400,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: false,
        message: 'No id grocery provided',
      }),
    };
  }

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

  const grocery = await getByIdGroceries(id);

  return {
    statusCode: 201,
    headers: config.functions.headers,
    body: JSON.stringify({
      error: false,
      message: `Grocery with id ${id} retrieved successfully`,
      grocery,
    }),
  };
};

export { handler };
