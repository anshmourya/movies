import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Btns from "../Buttons/Btns";
const Form = ({ title }) => {
  return (
    <>
      <img
        src="/assets/signinBg.jpg"
        alt="netflixbg"
        className="fixed w-screen -z-10 brightness-50"
      />
      <div className="flex flex-col items-center justify-center h-screen ">
        <div
          className="w-[430px]  p-12 rounded-lg"
          style={{ background: "rgba(0,0,0,.75)" }}
        >
          <h1 className="text-3xl text-white ">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            className="block h-12 m-auto my-4 w-[100%] outline-none p-3 rounded-lg bg-gray-700  text-white"
          />
          <input
            type="password"
            placeholder="password"
            className="block h-12 m-auto my-4 w-[100%] outline-none p-3 rounded-lg bg-gray-700 text-white"
          />
          <Link to="/">
            <Btns
              buttonStyle={
                "w-full h-12 text-sm text-center text-white bg-red-600 rounded-lg"
              }
              buttonTitle={title === "Sign In" ? "Sign In" : "Sign Up"}
            />
          </Link>
          <p className="my-4 text-gray-400">
            {title === "Sign In" ? "New To Netflix?" : "Already Have Account?"}{" "}
            <span className="text-white cursor-pointer hover:border-b">
              <Link to={title === "Sign In" ? "/signup" : "/signin"}>
                {title === "Sign In" ? "Sign Up Now" : "Sign In Now"}
              </Link>
            </span>
          </p>
          <p className="text-sm text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.{" "}
            <span className="font-semibold text-blue-700 cursor-pointer">
              Learn more.
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Form;
