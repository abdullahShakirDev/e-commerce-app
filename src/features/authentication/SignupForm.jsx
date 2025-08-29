import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

function SignupForm() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col md:flex-row items-center min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/signup-logo.png"
            alt="Shopping illustration"
            className="max-w-2xl"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center text-text2">
          <form className="w-full max-w-sm px-8">
            <h1 className="text-4xl font-bold my-4">Create an account</h1>
            <p className="text-sm text-text1 mb-6">Enter your details below</p>

            <div className="mb-6">
              <input
                className="w-full border-b border-text1 bg-transparent py-2 px-1 focus:outline-none focus:border-text2"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="mb-6">
              <input
                className="w-full border-b border-text1 bg-transparent py-2 px-1 focus:outline-none focus:border-text2"
                type="email"
                placeholder="Email or Phone Number"
              />
            </div>

            <div className="mb-6">
              <input
                className="w-full border-b border-text1 bg-transparent py-2 px-1 focus:outline-none focus:border-text2"
                type="password"
                placeholder="Password"
              />
            </div>

            <button className="w-full bg-secondary2 cursor-pointer text-text font-semibold py-2 rounded-sm hover:bg-red-500 transition-all">
              Create Account
            </button>

            <button className="my-4 flex cursor-pointer justify-center items-center gap-2 w-full border border-text1 text-text2 py-2 rounded-sm hover:bg-gray-800 hover:text-text transition-all">
              <FcGoogle size={20} />
              <span>Sign up with Google</span>
            </button>

            <p className="text-center text-sm text-text1">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className=" hover:underline hover:text-text2 font-medium cursor-pointer transition-all"
              >
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignupForm;
