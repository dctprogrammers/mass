import axios from "axios";
import { useNavigate } from "@solidjs/router";
// import { useNavigate } from "solid-app-router";
import { Component, createSignal, createEffect } from "solid-js";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SignIn: Component = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [loading, setLoading] = createSignal(false);

  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios
        .post(
          "https://api.hardwario.cloud/v1/auth/login",
          document.querySelector("#my-form"),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response.data);

          sessionStorage.setItem("token", response.data.access_token);
          sessionStorage.setItem("name", response.data.name);
          navigate("/dashboard", { replace: true });
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  createEffect(() => {
    if (sessionStorage.getItem("token"))
      navigate("/dashboard", { replace: true });
  });

  return (
    <>
      <Navbar />
      <div class="h-[90vh] flex flex-col items-center justify-center py-8 mx-auto lg:py-0 my-auto">
        <div class="w-[320px] bg-white rounded-lg shadow border-2 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-neutral-500">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" id="my-form">
              <div>
                <label
                  for="login"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="login"
                  id="login"
                  value={email()}
                  onInput={(e) => setEmail(e.currentTarget.value)}
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
                  value={password()}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {/* <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div> */}
              <button
                onClick={handleLogin}
                disabled={loading()}
                class="w-full text-white bg-rojo hover:bg-turkey_red focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-red dark:hover:bg-red-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-white">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  class="font-medium text-rojo hover:text-turkey_red hover:underline"
                >
                  Sign up
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

export default SignIn;
