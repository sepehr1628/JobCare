import { supabase } from "../../supabase";

export async function useNewUse() {
  const { data, session, error } = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
  });

  return { data, session, error };
}
