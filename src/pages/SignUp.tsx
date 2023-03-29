import { Component } from "solid-js";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SignUp: Component = () => {
  return (
    <>
      <Navbar />
      <div class="h-[90vh] flex flex-col items-center justify-center py-8 mx-auto lg:py-0 my-auto">
        <div class="w-[320px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-rojo hover:bg-turkey_red focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-red dark:hover:bg-red-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-200">
                Already have account?{" "}
                <a
                  href="/signin"
                  class="font-medium text-rojo hover:text-turkey_red hover:underline"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
