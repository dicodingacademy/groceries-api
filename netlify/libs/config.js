module.exports = {
  supabase: {
    url: 'https://ynmgijklsugezywxqspz.supabase.co',
    apiKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlubWdpamtsc3VnZXp5d3hxc3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzUwNjAsImV4cCI6MTk5MDY1MTA2MH0.HnPmI-I6d4yGjc1Q_5PDQf9_e6yybiE_A7p1I1fz9ak',
    tables: {
      groceries: 'groceries',
    },
  },
  // supabase: {
  //   url: process.env.SUPABASE_URL,
  //   apiKey: process.env.SUPABASE_API_KEY,
  //   tables: {
  //     groceries: process.env.SUPABASE_TABLE_GROCERIES,
  //   },
  // },

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
