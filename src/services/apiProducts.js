import { supabase } from "../../supabase";

export async function getProducts({ sorting, filter }) {
  const sortConfig = {
    "a-z": { column: "name", ascending: true },
    "high-price": { column: "price", ascending: false },
    "low-price": { column: "price", ascending: true },
  };

  let query = supabase.from("products").select("*").range(0, 9);

  if (filter && Object.keys(filter).length) {
    Object.entries(filter).forEach(([key, values]) => {
      if (values?.length) {
        query = query.in(key, values);
      }
    });
  }

  if (sorting) {
    const sortOption = sortConfig[sorting];
    if (sortOption) {
      query = query.order(sortOption.column, {
        ascending: sortOption.ascending,
      });
    }
  }

  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("Failed to fetch products!");
  }
  return data;
}
