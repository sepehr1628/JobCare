import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase";
import { PiSpinner } from "react-icons/pi";
import SocialNetworkLogIn from "../UI/SocialNetworkLogIn";
import useAuthStore from "@/stores/useAuthStore";

function LogInForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate();

  const { setAccessToken } = useAuthStore();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });
      setAccessToken(data.session.access_token);
      if (error) throw new Error(error.message);
      if (data.session.access_token) {
        if (data.session.access_token) {
          toast.success("Welcome Back🎉");
          navigate("/dashboard", { replace: true });
        } else {
          throw new Error("Session not established. Please try again.");
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 animate-fade  w-full h-screen z-50">
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-transparent rounded-md p-5 z-50 w-4/5 max-w-lg shadow-3xl">
        <h2 className="font-bold text-2xl sm:text-3xl text-center py-4 mb-4">
          Log In Form
        </h2>
        <form
          onSubmit={handleLogIn}
          className="flex flex-col gap-6 [&>input]:p-3 [&>input]:shadow-2xl [&>input]:rounded-md [&>input]:border-b [&>input]:border-blue-900"
        >
          <input
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email"
            className="opacity-70 focus:opacity-100 before:content-['Email'] before:absolute before:w-6 before:h-6 before:text-gray before:block relative focus:outline-none active:outline-none hover:border-b-2 focus:border-b-2 active:border-b-2"
            autoComplete="email"
          />
          <input
            type="Password"
            placeholder="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
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
            {"Don't have an account? "}
            <Link to="/signup" className="text-blue underline">
              Sign Up
            </Link>
          </p>

          <SocialNetworkLogIn page="login" />
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
