import { supabase } from "../../supabase";

export async function getProducts({ sorting }) {
  const sortConfig = {
    "a-z": { column: "name", ascending: true },
    "high-price": { column: "price", ascending: false },
    "low-price": { column: "price", ascending: true },
  };
  let query = supabase
    .from("products")
    .select("*")
    .range(0, 9)
    .order("isAvailable", { ascending: false });

  const sortOption = sortConfig[sorting];
  if (sortOption) {
    query = query.order(sortOption.column, { ascending: sortOption.ascending });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded!");
  }

  return data;
}
