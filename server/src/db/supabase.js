import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

let supabase;

export function getSupabaseClient() {
  if (supabase) return supabase;

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const DB_SECRET_KEY = process.env.DB_SECRET_KEY;

  supabase = createClient(SUPABASE_URL, DB_SECRET_KEY);
  console.log("supabase connected");

  return supabase;
}
