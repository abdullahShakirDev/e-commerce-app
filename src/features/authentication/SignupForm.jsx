import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm() {
  const { signup, isPending } = useSignup();
  const { register, getValues, handleSubmit, reset } = useForm();

  function onSubmit({ fullName, email, password }) {
    if (!fullName || !email || !password) return;
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }

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
          <form
            className="w-full max-w-sm px-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-4xl font-bold my-4">Create an account</h1>
            <p className="text-sm text-text1 mb-6">Enter your details below</p>

            <div className="mb-6">
              <input
                className="w-full border-b border-text1 bg-transparent py-2 px-1 focus:outline-none focus:border-text2"
                type="text"
                id="fullName"
                placeholder="Name"
                {...register("fullName", {
                  required: "This field is required",
                })}
              />
            </div>

            <div className="mb-6">
              <input
                className="w-full border-b border-text1 bg-transparent py-2 px-1 focus:outline-none focus:border-text2"
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: "This field is required" })}
              />
            </div>

            <div className="mb-6">
              <input
                className="w-full border-b border-text1 bg-transparent py-2 px-1 focus:outline-none focus:border-text2"
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full border-b border-text1 bg-transparent py-2 px-1 focus:outline-none focus:border-text2"
                type="password"
                id="passwordConfirm"
                placeholder="Password Confirm"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (vlaue) =>
                    vlaue === getValues().password || "Password needs to match",
                })}
              />
            </div>

            <button
              disabled={isPending}
              className="w-full flex items-center justify-center bg-secondary2 cursor-pointer text-text font-semibold py-2 rounded-sm hover:bg-red-500 transition-all"
            >
              {isPending ? <SpinnerMini /> : "Create Account"}
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
