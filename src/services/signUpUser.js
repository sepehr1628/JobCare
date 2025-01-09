import { supabase } from "../../supabase";

export async function signUpUser({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  return { data, error };
}
