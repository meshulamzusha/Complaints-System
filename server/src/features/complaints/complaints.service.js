import { getSupabaseClient } from "../../db/supabase.js";

const supabase = getSupabaseClient();

const create = async (complaint) => {
  const { data, error } = await supabase
    .from("complaints")
    .insert({
      category: complaint.category,
      content: complaint.content,
      created_at: new Date().toLocaleString(),
    })
    .select();

  if (error) {
    console.log("Error while insert complaint: ", error);
  }

  return data;
};

const getAll = async () => {
  const { data, error } = await supabase.from("complaints").select();

  if (error) {
    console.log("Error while fetching complaint: ", error);
  }

  return data;
};

export default {
  create,
  getAll,
};
