import { NavLink, useNavigate } from "solid-app-router";
import { Component, createEffect } from "solid-js";

const Navbar: Component = () => {
  const html = document.querySelector("html");
  // let lightMode = document?.getElementById("light")?.style.display;
  // let darkMode = document?.getElementById("dark")?.style.display;
  // let lightMode = document?.getElementById("light");
  // let darkMode = document?.getElementById("dark");

  const toggleLightMode = () => {
    html?.classList.add("light");
    html?.classList.remove("dark");

    // darkMode?.classList.add("block");
    // lightMode?.classList.add("hidden");

    // console.log(document.querySelector("#toggle")?.checked);

    // document.querySelector('[data-theme="light"]')?.remove();
    // document.querySelector('[data-theme="dark"]')?.append();

    // console.log("Light", lightMode);
  };

  const toggleDarkMode = () => {
    html?.classList.add("dark");
    html?.classList.remove("light");

    // lightMode?.classList.add("hidden");
    // darkMode?.classList.add("block");

    // console.log(document.querySelector("#toggle")?.checked);

    // document.querySelector('[data-theme="dark"]')?.remove();
    // document.querySelector('[data-theme="light"]')?.append();

    // console.log("Dark", darkMode);
  };

  const navigate = useNavigate();

  createEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    }
  });

  const logOut = () => {
    sessionStorage.removeItem("token");
    navigate("/signin", { replace: true });
  };

  const authLinks = (
    <div class="flex items-center gap-4">
      <NavLink class="hover:opacity-50" href="/dashboard">
        Dashboard
      </NavLink>
      <NavLink class="hover:opacity-50" href="/about">
        About
      </NavLink>
      <button class="hover:opacity-50" onClick={logOut}>
        Log out
      </button>
    </div>
  );

  const guestLinks = (
    <div class="flex items-center gap-4">
      <NavLink class="hover:opacity-50" href="/about">
        About
      </NavLink>
      <NavLink class="hover:opacity-50" href="/signin">
        Sign In
      </NavLink>
    </div>
  );

  return (
    <header class="bg-red-600 text-white py-2 px-8 h-16 flex items-center justify-between">
      <a class="hover:opacity-50 hero" href="/">
        MASS
      </a>
      <div class="flex items-center">
        {/* <input type="checkbox" name="" id="toggle" class="peer" /> */}
        <div class="block" id="1">
          <a
            id="light"
            // id="theme-switcher"
            class="block cursor-pointer w-12 whitespace-nowrap bg-transparent py-2 px-3 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
            // href="#"
            data-theme="light"
            onClick={toggleLightMode}
          >
            <div class="pointer-events-none">
              <div
                class="inline-block w-[24px] text-center"
                data-theme-icon="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="inline-block h-6 w-6"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div class="block" id="2">
          <a
            id="dark"
            // id="theme-switcher"
            class="block cursor-pointer w-12 whitespace-nowrap bg-transparent py-2 px-3 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
            // href="#"
            data-theme="dark"
            onClick={toggleDarkMode}
            data-te-dropdown-item-ref
          >
            <div class="pointer-events-none">
              <div
                class="inline-block w-[24px] text-center"
                data-theme-icon="dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="inline-block h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
      {sessionStorage.getItem("token") ? authLinks : guestLinks}
    </header>
  );
};

export default Navbar;
function setSystemTheme() {
  throw new Error("Function not implemented.");
}
