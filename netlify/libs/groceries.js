// import supabase from './supabase';
// import config from './config';
const supabase = require('./supabase');
const config = require('./config');

const Groceries = {
  async getAll() {
    const { data, error } = await supabase.from(config.supabase.tables.groceries).select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from(config.supabase.tables.groceries)
      .select('*')
      .match({ id });

    if (error) {
      throw new Error(error.message);
    }

    return data[0] ?? null;
  },

  async store({ name, quantity }) {
    const { data, error } = await supabase
      .from(config.supabase.tables.groceries)
      .insert({ name, quantity });

    console.log('store', data);

    if (error) {
      throw new Error(error.message);
    }
  },

  async update(id, { name, quantity }) {
    const { error } = await supabase
      .from(config.supabase.tables.groceries)
      .update({ name, quantity })
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },

  async destroy(id) {
    const { error } = await supabase.from(config.supabase.tables.groceries).delete().eq('id', id);

    if (error) {
      throw new Error(error.message);
    }
  },

  async destroyAll() {
    const { error } = await supabase.from(config.supabase.tables.groceries).delete().select('*');

    if (error) {
      throw new Error(error.message);
    }
  },
};

// export default Groceries;
module.exports = Groceries;
