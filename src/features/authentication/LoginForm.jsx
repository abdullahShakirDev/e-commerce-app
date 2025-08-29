import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import { NavLink } from "react-router-dom";

function LoginForm() {
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
            <h1 className="text-4xl font-bold my-4">Log in to Exclusive</h1>
            <p className="text-sm text-text1 mb-6">Enter your details below</p>

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

            <div className="flex items-center justify-between">
              <button className="px-6.5 bg-secondary2 cursor-pointer text-text font-semibold py-2 rounded-sm hover:bg-red-500 transition-all">
                Log in
              </button>

              <p className="text-center text-sm text-secondary2">
                <NavLink
                  to="/login"
                  className="hover:underline hover:text-red-600 font-medium cursor-pointer transition-all"
                >
                  Forget Password?
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginForm;
