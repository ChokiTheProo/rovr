import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kqfgmjoqnpslaygvgsrd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZmdtam9xbnBzbGF5Z3Znc3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NzIwNzQsImV4cCI6MjA4MjI0ODA3NH0._lAAreGgprDe9ectMwxPIz2eDU215b60lmtH4vyXNPg";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
