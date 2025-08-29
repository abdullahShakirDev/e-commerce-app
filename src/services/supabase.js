import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yssivhlcngfpwmowuaaq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzc2l2aGxjbmdmcHdtb3d1YWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NTY1NTgsImV4cCI6MjA3MTAzMjU1OH0.o58M1PoloonMvaA8R8xLfTgLmXlbfz954J2X4pbOhHU";
export const supabase = createClient(supabaseUrl, supabaseKey);
