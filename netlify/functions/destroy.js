import { destroy as destroyGroceries } from '../libs/groceries.js';
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
        error: true,
        message: 'No id grocery provided',
      }),
    };
  }

  console.log(event)
  if (!(event.httpMethod === 'DELETE')) {
    return {
      statusCode: 200,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'Only DELETE method allowed',
      }),
    };
  }

  await destroyGroceries(id);

  return {
    statusCode: 201,
    headers: config.functions.headers,
    body: JSON.stringify({
      error: false,
      message: `Grocery with id ${id} deleted successfully`,
    }),
  };
};

export { handler };
