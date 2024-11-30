import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bvhfaldehevyffbdyunp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2aGZhbGRlaGV2eWZmYmR5dW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MDA5NjMsImV4cCI6MjA0ODM3Njk2M30.cyDtuCTPolGbh5nwMmlFI6A4DXg1_2CE2f_G2Zel0Oo";
export const supabase = createClient(supabaseUrl, supabaseKey);
