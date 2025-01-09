import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import toast from "react-hot-toast";
import { PiSpinner } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import SocialNetworkLogIn from "../UI/SocialNetworkLogIn";
import useAuthStore from "@/stores/useAuthStore";

function SignUpForm() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { setAccessToken } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: signUpEmail,
        password: signUpPassword,
      });
      setAccessToken(data.session.access_token);
      if (data.session.access_token) {
        toast.success("Signed up succesfully 🎉");
        navigate("/dashboard", { replace: true });
      }
      if (error) throw new Error(error);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(accessToken);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 animate-fade  w-full h-screen z-50">
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-transparent rounded-md p-5 z-50 w-4/5 max-w-lg shadow-3xl">
        <h2 className="font-bold text-2xl sm:text-3xl text-center py-4 mb-4">
          Sign Up Form
        </h2>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-6 [&>input]:p-3 [&>input]:shadow-2xl [&>input]:rounded-md [&>input]:border-b [&>input]:border-blue-900"
        >
          <input
            placeholder="Email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            type="email"
            className="opacity-70 focus:opacity-100 before:content-['Email'] before:absolute before:w-6 before:h-6 before:text-gray before:block relative focus:outline-none active:outline-none hover:border-b-2 focus:border-b-2 active:border-b-2"
            autoComplete="email"
          />
          <input
            type="Password"
            placeholder="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            className="opacity-70 focus:opacity-100 focus:outline-none active:outline-none hover:border-b-2 focus:border-b-2 active:border-b-2"
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="bg-blue-900 py-2 rounded-3xl w-3/4 m-auto mt-6 text-white text-center"
            disabled={isLoading}
          >
            {isLoading ? <PiSpinner className="m-auto" /> : "Sign Up"}
          </button>
          <p className="text-black text-sm md:text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-blue underline">
              Login
            </Link>
          </p>

          <SocialNetworkLogIn page="signin" />
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
