import { supabase } from "../../supabase";

export async function getProducts({ sorting, search }) {
  const sortConfig = {
    "a-z": { column: "name", ascending: true },
    "high-price": { column: "price", ascending: false },
    "low-price": { column: "price", ascending: true },
  };

  let query = supabase.from("products").select("*").range(0, 9);

  // Apply filters dynamically
  if (search) {
    Object.entries(search).forEach(([column, values]) => {
      if (Array.isArray(values)) {
        if (values.length === 1) {
          query = query.eq(column, values[0]); // Single value
        } else {
          query = query.in(column, values); // Multiple values
        }
      }
    });
  }

  // Apply sorting
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
