module.exports = {
  supabase: {
    url: process.env.SUPABASE_URL,
    apiKey: process.env.SUPABASE_API_KEY,
    tables: {
      groceries: process.env.SUPABASE_TABLE_GROCERIES,
    },
  },
  functions: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Max-Age': '2592000',
      'Access-Control-Allow-Credentials': 'true',
    },
  },
};
