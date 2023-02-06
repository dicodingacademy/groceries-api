import Config from './config.js';

const Endpoints = {
  get: `${Config.BASE_URL}/groceries`,
  getById: (id) => `${Config.BASE_URL}/groceries/${id}`,
  post: `${Config.BASE_URL}/groceries/store`,
  update: (id) => `${Config.BASE_URL}/groceries/update/${id}`,
  delete: (id) => `${Config.BASE_URL}/groceries/destroy/${id}`,
};

export default Endpoints;
