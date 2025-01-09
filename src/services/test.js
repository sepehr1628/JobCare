import { supabase } from "../../supabase";

export async function test() {
  const { data } = await supabase.auth.getSession();
  //   console.log(data);
  return data;
}
