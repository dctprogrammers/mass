import { Outlet } from "@solidjs/router";
// import { Outlet } from "solid-app-router";
import { Component } from "solid-js";

const Sidenav: Component = () => {
  return (
    <section class="pt-[65px] relative h-screen min-h-full">
      {/* <section class="pt-[65px] relative h-screen min-h-full overflow-y-hidden border bg-gray-50"> */}
      {/* <!-- Sidenav --> */}
      <nav
        id="sidenav-4"
        class="absolute top-[66px] left-0 z-[1035] h-full w-60 px-3 py-4 border-r-2 border-gray-200 -translate-x-full overflow-hidden bg-white dark:bg-gray-800 dark:text-white dark:border-neutral-500 data-[te-sidenav-hidden='false']:translate-x-0"
        // class="group absolute top-[65px] left-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-slim='true']:hidden data-[te-sidenav-slim='true']:w-[77px] data-[te-sidenav-slim-collapsed='true']:w-[77px] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800 [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='false']]:hidden [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='true']]:[display:unset]"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode="side"
        // data-te-sidenav-slim="true"
        data-te-sidenav-content="#content"
        // data-te-sidenav-slim-collapsed="true"
      >
        <ul class="relative list-none" data-te-sidenav-menu-ref>
          <li class="relative">
            <a
              href="/dashboard"
              class="flex items-center rounded-lg p-2 text-base font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:[&.active]:text-neutral-400"
              // class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <svg
                class="h-6 w-6 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span
                class="ml-3 group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                data-te-sidenav-slim="false"
              >
                Dashboard
              </span>
            </a>
          </li>
          <li class="relative">
            <a
              href="/organizations"
              class="flex items-center rounded-lg p-2 text-base font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:[&.active]:text-neutral-400"
              // class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <svg
                class="w-6 h-6 transition duration-75"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                />
              </svg>
              <span
                class="ml-3 group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                data-te-sidenav-slim="false"
              >
                Organizations
              </span>
            </a>
          </li>
          <li class="relative">
            <a
              class="flex h-12 cursor-pointer items-center truncate rounded-lg p-2 text-base font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:active:text-neutral-400"
              data-te-sidenav-link-ref
            >
              <span class="mr-4 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                data-te-sidenav-slim="false"
              >
                Category 1
              </span>
              <span
                class="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none"
                data-te-sidenav-rotate-icon-ref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <ul
              class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
              data-te-sidenav-collapse-ref
            >
              <li class="relative">
                <a
                  class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-8 pr-6 text-[0.85rem] font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:active:text-neutral-400"
                  data-te-sidenav-link-ref
                >
                  Link 2
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-8 pr-6 text-[0.85rem] font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:active:text-neutral-400"
                  data-te-sidenav-link-ref
                >
                  Link 3
                </a>
              </li>
            </ul>
          </li>
          <li class="relative">
            <a
              class="flex h-12 cursor-pointer items-center truncate rounded-lg p-2 text-base font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:active:text-neutral-400"
              data-te-sidenav-link-ref
            >
              <span class="mr-4 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                data-te-sidenav-slim="false"
              >
                Category 2
              </span>
              <span
                class="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none"
                data-te-sidenav-rotate-icon-ref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <ul
              class="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
              data-te-sidenav-collapse-ref
            >
              <li class="relative">
                <a
                  class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-8 pr-6 text-[0.85rem] font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:active:text-neutral-400"
                  data-te-sidenav-link-ref
                >
                  Link 4
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-8 pr-6 text-[0.85rem] font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white dark:hover:bg-gray-600 dark:focus:text-gray-300 dark:active:text-neutral-400"
                  data-te-sidenav-link-ref
                >
                  Link 5
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* <!-- Sidenav --> */}

      <div id="content" class="!pl-[240px]">
        {/* <!-- Toggler --> */}
        {/* <button
            class="mr-1 mt-10 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            data-te-sidenav-toggle-ref
            data-te-target="#sidenav-4"
            aria-controls="#sidenav-4"
            aria-haspopup="true"
          >
            <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button> */}
        {/* <!-- Toggler --> */}
        {/* <button
            class="mt-10 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            aria-haspopup="true"
            id="slim-toggler"
          >
            Toggle Slim
          </button> */}
        {/* <div class="pt-[65px] ml-64 bg-gray-50 h-screen">Home test</div> */}
        <Outlet />
      </div>
    </section>
  );
};

export default Sidenav;
