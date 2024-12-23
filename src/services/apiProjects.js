import { supabase } from "../../supabase";

export async function getProjects({ sorting }) {
  const sortConfig = {
    "a-z": { column: "title", ascending: true },
    "high-price": { column: "budget", ascending: false },
    "low-price": { column: "budget", ascending: true },
  };
  let query = supabase.from("projects").select("*").range(0, 9);

  const sortOption = sortConfig[sorting];
  if (sortOption) {
    query = query.order(sortOption.column, { ascending: sortOption.ascending });
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Projects could not be loaded!");
  }

  return data;
}
