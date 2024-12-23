import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase";
import { PiSpinner } from "react-icons/pi";

function LogInForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });
      // localStorage.setItem("accessToken", data.session.access_token);
      setIsLoading(false);
      if (error) throw new Error(error.message);
      if (!error && data.user.role === "authenticated") {
        toast.success("Welcome Back🎉");
        navigate("/panel");
      }
    } catch (error) {
      toast.error(error.message);
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
        </form>
        <div className="flex flex-col gap-4 mt-6 items-center">
          <p>Or Sign Up Using</p>
          <div
            onClick={() =>
              toast.error("We don't have that feature yet, sorry :(")
            }
            className="flex gap-4 [&>svg]:w-10"
          >
            <span>
              <svg
                fill="#000000"
                height="27.5px"
                width="27.5px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
              >
                <g id="XMLID_834_">
                  <path
                    id="XMLID_835_"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                  />
                </g>
              </svg>
            </span>
            <span>
              <svg
                fill="#000000"
                width="27.5px"
                height="27.5px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>ionicons-v5_logos</title>
                <path d="M473.16,221.48l-2.26-9.59H262.46v88.22H387c-12.93,61.4-72.93,93.72-121.94,93.72-35.66,0-73.25-15-98.13-39.11a140.08,140.08,0,0,1-41.8-98.88c0-37.16,16.7-74.33,41-98.78s61-38.13,97.49-38.13c41.79,0,71.74,22.19,82.94,32.31l62.69-62.36C390.86,72.72,340.34,32,261.6,32h0c-60.75,0-119,23.27-161.58,65.71C58,139.5,36.25,199.93,36.25,256S56.83,369.48,97.55,411.6C141.06,456.52,202.68,480,266.13,480c57.73,0,112.45-22.62,151.45-63.66,38.34-40.4,58.17-96.3,58.17-154.9C475.75,236.77,473.27,222.12,473.16,221.48Z" />
              </svg>
            </span>
            <span>
              <svg
                fill="#000000"
                height="27.5px"
                width="27.5px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
              >
                <g id="XMLID_826_">
                  <path
                    id="XMLID_827_"
                    d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
C307.394,57.037,305.009,56.486,302.973,57.388z"
                  />
                </g>
              </svg>
            </span>
            <span>
              <svg
                width="27.5px"
                height="27.5px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z"
                  fill="#000000"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInForm;
