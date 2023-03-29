import { useNavigate } from "solid-app-router";
import { Component } from "solid-js";

const Navbar: Component = () => {
  const html = document.querySelector("html");

  const toggleLightMode = () => {
    html?.classList.add("light");
    html?.classList.remove("dark");

    localStorage.setItem("theme", "light");
  };

  const toggleDarkMode = () => {
    html?.classList.add("dark");
    html?.classList.remove("light");

    localStorage.setItem("theme", "dark");
  };

  const navigate = useNavigate();

  // createEffect(() => {
  //   if (localStorage.getItem("theme") === null) {
  //     localStorage.setItem("theme", "dark");
  //   }
  // });

  const logOut = () => {
    sessionStorage.removeItem("token");
    navigate("/signin", { replace: true });
  };

  const authLinks = (
    <div class="relative flex items-center">
      {/* Notifications */}
      <div class="relative" data-te-dropdown-ref>
        <button
          // class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          class="mr-1 flex items-center rounded-lg p-2 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-900 disabled:text-black/30 [&.active]:text-black/90 dark:hover:bg-neutral-700 dark:focus:text-neutral-300 dark:[&.active]:text-neutral-400"
          // href="#"
          type="button"
          id="dropdownMenuButton1"
          // role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <span class="overflow-hidden border-0 p-0 absolute h-[1px] w-[1px] m-[-1px]">
            View notifications
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="absolute -mt-5 ml-3 rounded-full bg-rojo pt-0 pb-[1px] px-[0.325rem] text-xs text-white">
            1
          </span>
        </button>
        <div
          class="absolute left-auto right-0 z-[1000] float-left mt-1 hidden w-96 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1"
          data-te-dropdown-menu-ref
        >
          <h6 class="block bg-gray-50 py-2 px-4 text-base text-center font-medium">
            Notifications
          </h6>
          <div>
            <a
              class="flex border-b py-3 px-4 hover:bg-gray-50 disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
            >
              <div class="shrink-0">
                <img
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.com/application-ui/demo/images/users/bonnie-green.png"
                  alt="Jese image"
                />
                <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-blue-700">
                  <svg
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm text-gray-500">
                  New message from&nbsp;
                  <span class="font-semibold text-gray-900">Bonnie Green</span>:
                  "Hey, what's up? All set for the presentation?"
                </div>
                <div class="text-xs font-medium text-blue-700">
                  a few moments ago
                </div>
              </div>
            </a>
            <a
              class="flex border-b py-3 px-4 hover:bg-gray-50 disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
            >
              <div class="shrink-0">
                <img
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.com/application-ui/demo/images/users/bonnie-green.png"
                  alt="Jese image"
                />
                <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-blue-700">
                  <svg
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm text-gray-500">
                  New message from&nbsp;
                  <span class="font-semibold text-gray-900">Bonnie Green</span>:
                  "Hey, what's up? All set for the presentation?"
                </div>
                <div class="text-xs font-medium text-blue-700">
                  a few moments ago
                </div>
              </div>
            </a>
            <a
              class="flex border-b py-3 px-4 hover:bg-gray-50 disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
            >
              <div class="shrink-0">
                <img
                  class="h-11 w-11 rounded-full"
                  src="https://flowbite.com/application-ui/demo/images/users/bonnie-green.png"
                  alt="Jese image"
                />
                <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-blue-700">
                  <svg
                    class="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                </div>
              </div>
              <div class="w-full pl-3">
                <div class="mb-1.5 text-sm text-gray-500">
                  New message from&nbsp;
                  <span class="font-semibold text-gray-900">Bonnie Green</span>:
                  "Hey, what's up? All set for the presentation?"
                </div>
                <div class="text-xs font-medium text-blue-700">
                  a few moments ago
                </div>
              </div>
            </a>
          </div>
          <a
            class="block -mt-px bg-gray-50 py-2 text-base text-center hover:bg-gray-100"
            href=""
            data-te-dropdown-item-ref
          >
            <div class="inline-flex items-center">
              <svg
                class="mr-2 h-5 w-5 mt-px"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              View all
            </div>
          </a>
        </div>
      </div>
      {/* End Notifications */}
      {/* Theme Mode */}
      <div
        class=" text-sm font-medium relative before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-gray-900 before:px-3 before:py-2 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-900 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
        data-tip="Toggle dark mode"
      >
        <button
          type="button"
          class="mr-1 rounded-lg p-2.5 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-900  disabled:text-black/30 [&.active]:text-black/90 dark:hover:bg-neutral-700 dark:focus:text-neutral-300 dark:[&.active]:text-neutral-400"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            id="theme-toggle-dark-icon"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            class="h-5 w-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {/* End Theme Mode */}
      {/* Avatar */}
      <div class="relative p-1" data-te-dropdown-ref>
        <a
          class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none rounded-lg bg-neutral-50"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
            class="w-8 rounded-lg hover:opacity-80"
            alt=""
            loading="lazy"
          />
        </a>
        <div
          class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden w-48 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton2"
          data-te-dropdown-menu-ref
        >
          <h6 class="block bg-gray-50 py-2 px-4 text-base text-center font-medium">
            {sessionStorage.hasOwnProperty("name") &&
              sessionStorage.getItem("name")}
          </h6>
          <div>
            <a
              class="block w-full py-2 px-4 text-sm font-normal text-gray-900 hover:bg-gray-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="/users/profile"
              data-te-dropdown-item-ref
            >
              My profile
            </a>
          </div>
          <div>
            <a
              class="pointer-events-none block w-full py-2 px-4 text-sm font-normal text-gray-400 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-500 dark:hover:bg-neutral-600"
              // class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
            >
              Settings
            </a>
          </div>
          <div>
            <a
              class="block w-full py-2 px-4 text-sm font-normal text-gray-900 hover:bg-gray-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
              onClick={logOut}
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
      {/* End Avatar */}
    </div>
    // <ul
    //   class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
    //   data-te-navbar-nav-ref
    // >
    //   <li class="lg:pr-2" data-te-nav-item-ref>
    //     <a
    //       class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
    //       href="/dashboard"
    //       data-te-nav-link-ref
    //     >
    //       Dashboard
    //     </a>
    //   </li>
    //   <li class="lg:pr-2" data-te-nav-item-ref>
    //     <a
    //       class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
    //       href="/about"
    //       data-te-nav-link-ref
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li class="lg:pr-2" data-te-nav-item-ref>
    //     <a
    //       class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
    //       href="#"
    //       data-te-nav-link-ref
    //     >
    //       Projects
    //     </a>
    //   </li>
    // </ul>
    // <div class="flex items-center gap-4">
    //   <NavLink class="hover:opacity-50" href="/dashboard">
    //     Dashboard
    //   </NavLink>
    //   <NavLink class="hover:opacity-50" href="/about">
    //     About
    //   </NavLink>
    //   <button class="hover:opacity-50" onClick={logOut}>
    //     Log out
    //   </button>
    // </div>
  );

  const guestLinks = (
    <ul
      class="list-style-none flex flex-col pl-0 md:flex-row"
      data-te-navbar-nav-ref
    >
      {/* <li class="md:pr-2" data-te-nav-item-ref>
        <a
          class="text-neutral-50 hover:text-neutral-300 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
          href="/about"
          data-te-nav-link-ref
        >
          About
        </a>
      </li> */}
      {/* <li class="md:pr-2" data-te-nav-item-ref>
        <a
          class="text-white hover:text-neutral-300 focus:text-neutral-900 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="signin"
          data-te-nav-link-ref
        >
          Sign In
        </a>
      </li> */}
    </ul>
    // <div class="flex items-center gap-4">
    //   <NavLink class="hover:opacity-50" href="/about">
    //     About
    //   </NavLink>
    //   <NavLink class="hover:opacity-50" href="/signin">
    //     Sign In
    //   </NavLink>
    // </div>
  );

  return (
    <nav
      class="z-50 fixed w-full bg-white border-b border-gray-200 dark:bg-gray-800"
      // class="z-50 fixed flex-no-wrap flex w-full items-center justify-between bg-white border-b border-neutral-200 dark:bg-gray-800 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div class="flex items-center justify-between w-full py-3 px-6">
        {/* <div class="flex w-full flex-wrap items-center justify-between p-3"> */}
        <div class="flex items-center justify-start">
          <button
            class="mr-3 inline-block rounded-lg p-2 text-gray-600 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-900 disabled:text-black/30 [&.active]:text-black/90 dark:hover:bg-gray-700 dark:focus:text-gray-300 dark:[&.active]:text-gray-400"
            // aria-haspopup="true"
            aria-expanded="true"
            id="slim-toggler"
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-sidenav-toggle-ref
            data-te-target="#sidenav-4"
            aria-controls="#sidenav-4"
            aria-haspopup="true"
          >
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http:/www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {/* <div class="flex-grow md:hidden">
          <button
            class="block border-0 bg-transparent px-2.5 text-neutral-900 hover:text-neutral-300 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-8 w-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div> */}
          {sessionStorage.getItem("token") ? (
            <a
              class="flex"
              href="/dashboard"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="/src/assets/logo_dct.svg"
                class="mr-3 h-8"
                alt="DCT MASS Logo"
              />
              <span class="text-2xl font-semibold">MASS</span>
            </a>
          ) : (
            <a
              class="flex"
              href="/"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="/src/assets/logo_dct.svg"
                class="mr-3 h-8"
                alt="DCT MASS Logo"
              />
              <span class="text-2xl font-semibold">MASS</span>
            </a>
          )}
          {/* <div
            class="items-center"
            // class="!visible hidden flex-grow basis-[100%] items-center md:!flex md:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <a
              class="mr-2 flex items-center text-neutral-900 hover:text-neutral-300 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
              href="/"
            >
              MASS Logo
            </a>
            <!-- Left links -->
            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="text-neutral-50 hover:text-neutral-300 focus:text-neutral-900 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  News
                  <!-- New by mohlo vyskakovat modal window, kdyý se udělá důležitá změna či funkce -->
                </a>
              </li>
            </ul>
            <!-- Left links -->
          </div> */}
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {sessionStorage.getItem("token") ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

export default Navbar;
