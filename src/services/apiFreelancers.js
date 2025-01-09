import { supabase } from "../../supabase";

export async function getFreelancers({ sorting }) {
  const sortConfig = {
    "a-z": { column: "name", ascending: true },
    "high-price": { column: "price", ascending: false },
    "low-price": { column: "price", ascending: true },
  };

  let query = supabase
    .from("users")
    .select("*")
    .eq("role", "freelancer")
    .range(0, 9);

  const sortOption = sorting && sortConfig[sorting];
  if (sortOption) {
    query = query.order(sortOption.column, { ascending: sortOption.ascending });
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Projects could not be loaded!");
  }
  return data;
}
