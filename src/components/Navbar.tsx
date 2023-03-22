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
    <>
      {/* <!-- Right elements --> */}
      <div class="relative flex items-center">
        {/* <!-- Icon --> */}
        <a
          class="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="#"
        >
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </span>
        </a>
        {/* Notifications */}
        <div class="relative" data-te-dropdown-ref>
          <a
            class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            <span class="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
              1
            </span>
          </a>
          <ul
            class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                Action
              </a>
            </li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                Another action
              </a>
            </li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
        {/* End Notifications */}
        {/* Avatar */}
        <div class="relative" data-te-dropdown-ref>
          <a
            class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
              class="w-8 rounded-full"
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref
          >
            <h6 class="block w-full whitespace-nowrap bg-transparent py-2 px-6 text-sm font-semibold text-neutral-500 dark:text-neutral-200">
              {sessionStorage.hasOwnProperty("name") &&
                sessionStorage.getItem("name")}
            </h6>
            <hr class="h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                My profile
              </a>
            </li>
            <li>
              <a
                class="pointer-events-none block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-400 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-500 dark:hover:bg-neutral-600"
                // class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                Settings
              </a>
            </li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                onClick={logOut}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        {/* End Avatar */}
      </div>
      {/* <!-- Right elements --> */}
    </>
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
      <li class="md:pr-2" data-te-nav-item-ref>
        <a
          class="text-white hover:text-neutral-300 focus:text-neutral-900 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="signin"
          data-te-nav-link-ref
        >
          Sign In
        </a>
      </li>
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
      class="flex-no-wrap relative flex h-[64px] w-full items-center justify-between bg-rojo py-4 shadow-md shadow-black/5 dark:bg-gray-800 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-6">
        {/* <div class="flex-grow md:hidden">
          <button
            class="block border-0 bg-transparent px-2.5 text-white hover:text-neutral-300 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200"
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
        <div
          class="items-center"
          // class="!visible hidden flex-grow basis-[100%] items-center md:!flex md:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <a
            class="mr-2 flex items-center text-white hover:text-neutral-300 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
            href="/"
          >
            MASS Logo
          </a>
          {/* <!-- Left links --> */}
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
        {sessionStorage.getItem("token") ? authLinks : guestLinks}
      </div>
    </nav>
    // <header class="bg-primary-red text-white py-2 px-8 h-16 flex items-center justify-between">
    //   <a class="hover:opacity-50 hero" href="/">
    //     MASS
    //   </a>
    //   <div class="flex items-center">
    //     <div class="block" id="1">
    //       <a
    //         id="theme-switcher"
    //         class="block cursor-pointer w-12 whitespace-nowrap bg-transparent py-2 px-3 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
    //         // href="#"
    //         data-theme="light"
    //         onClick={toggleLightMode}
    //       >
    //         <div class="pointer-events-none">
    //           <div
    //             class="inline-block w-[24px] text-center"
    //             data-theme-icon="light"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               class="inline-block h-6 w-6"
    //             >
    //               <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    //             </svg>
    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //     <div class="block" id="2">
    //       <a
    //         id="theme-switcher"
    //         class="block cursor-pointer w-12 whitespace-nowrap bg-transparent py-2 px-3 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
    //         // href="#"
    //         data-theme="dark"
    //         onClick={toggleDarkMode}
    //         data-te-dropdown-item-ref
    //       >
    //         <div class="pointer-events-none">
    //           <div
    //             class="inline-block w-[24px] text-center"
    //             data-theme-icon="dark"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               class="inline-block h-6 w-6"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //   </div>
    //   {sessionStorage.getItem("token") ? authLinks : guestLinks}
    // </header>
  );
};

export default Navbar;
