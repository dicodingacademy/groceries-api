// import { createClient } from '@supabase/supabase-js';
// import config from './config';
const { createClient } = require('@supabase/supabase-js');
const config = require('./config');

const supabase = createClient(config.supabase.url, config.supabase.apiKey);

// export default supabase;
module.exports = supabase;
