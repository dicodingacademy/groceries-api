import { store as storeGroceries } from '../libs/groceries.js';
import config from '../libs/config.js';

const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: config.functions.headers,
    };
  }

  if (!(event.httpMethod === 'POST')) {
    return {
      statusCode: 405,
      headers: config.functions.headers,
      body: JSON.stringify({
        error: true,
        message: 'Only POST method allowed',
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
  const grocery = await storeGroceries({ name, quantity });

  return {
    statusCode: 201,
    headers: config.functions.headers,
    body: JSON.stringify({
      error: false,
      message: 'New grocery added successfully',
      grocery,
    }),
  };
};

export { handler };
