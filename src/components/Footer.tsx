import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="z-[1050] relative bg-gray-50 text-center text-neutral-600 text-sm dark:bg-gray-900 dark:text-neutral-200">
      <div class="flex items-center justify-center border-y-2 border-neutral-300 p-4 dark:border-neutral-500">
        <div class="mr-6 hidden md:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div class="flex justify-center">
          <a
            href="https://www.facebook.com/DCT-Czech-434515943753180/"
            class="mr-6 text-neutral-600 dark:text-neutral-200"
            target="_blank"
          >
            <svg
              class="h-8 w-8 text-neutral-600 hover:text-rojo hover:stroke-2 dark:text-neutral-200 dark:hover:text-rojo"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/dct-czech-s-r-o-/"
            class="mr-6 text-neutral-600 dark:text-neutral-200"
            target="_blank"
          >
            <svg
              class="h-8 w-8 text-neutral-600 hover:text-rojo hover:stroke-2 dark:text-neutral-200 dark:hover:text-rojo"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC65vJs7P1esmeN7Kfm2mnHA"
            class="text-neutral-600 dark:text-neutral-200"
            target="_blank"
          >
            <svg
              class="h-8 w-8 text-neutral-600 hover:text-rojo hover:stroke-2 dark:text-neutral-200 dark:hover:text-rojo"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
      {/* <div class="text-center flex justify-center border-b-2 border-neutral-300 p-4 dark:border-neutral-500"> */}
      {/* <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4"> */}
      {/* <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Tailwind ELEMENTS
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div> */}
      {/* <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Angular
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                React
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Laravel
              </a>
            </p>
          </div> */}
      {/* <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Pricing
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Settings
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Help
              </a>
            </p>
          </div> */}
      {/* <div class="text-center">
          <h6 class="mb-2 flex justify-center font-semibold uppercase">
            Contact
          </h6>
          <div class="flex flex-col md:flex-row">
            <p class="mb-2 flex items-center justify-center md:mb-0 md:mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-2 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Havlíčkova 18, Boskovice, 680 01, CZ
            </p>
            <p class="mb-2 flex items-center justify-center md:mb-0 md:mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-2 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              info@dct.cleaning
            </p>
            <p class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-2 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              + 420 725 337 729
            </p>
          </div>
        </div> */}
      {/* </div> */}
      {/* </div> */}
      <div class="p-2 text-center">
        <span>© 2023 Copyright: </span>
        <a
          class="font-semibold text-neutral-600 hover:text-rojo dark:text-neutral-400 dark:hover:text-rojo"
          href="https://www.dctcleaning.cz/"
        >
          DCT Czech s.r.o.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
