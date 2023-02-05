const { destroyAll: destroyGroceries } = require('../libs/groceries.js');
import { store as storeGroceries } from '../libs/groceries.js';

exports.handler = async () => {
  await destroyGroceries();

  const groceries = [
    {
      id: 1,
      name: 'Bread',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Milk',
      quantity: 3,
    },
    {
      id: 3,
      name: 'Eggs',
      quantity: 12,
    },
  ];

  for (const grocery of groceries) {
    await storeGroceries(grocery);
  }

  return {
    statusCode: 200,
  };
};
