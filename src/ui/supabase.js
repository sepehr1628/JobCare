import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fjuyygujrfbbkoktmbdb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdXl5Z3VqcmZiYmtva3RtYmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNzY2ODUsImV4cCI6MjA0NTk1MjY4NX0.0M364Mm3U704wBBROklM8hAXwZ8QL_kVcpN-1MSZucA";

export const supabase = createClient(supabaseUrl, supabaseKey);
