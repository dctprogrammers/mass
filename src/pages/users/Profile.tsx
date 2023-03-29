import axios from "axios";
import { Component, createResource, Match, Switch } from "solid-js";
import { createStore } from "solid-js/store";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Profile: Component = () => {
  type User = {
    [key: string]: any;
  };

  const [state, setState] = createStore<User>([]);

  const getProfile = async () => {
    await axios
      .get("https://api.hardwario.cloud/v1/profile", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        setState(response.data);
        console.log(state);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [data] = createResource(getProfile);

  return (
    <>
      <div id="main-content" class="bg-gray-50">
        <main class="min-h-[90vh]">
          <div class="px-4 pt-6 grid grid-cols-1">
            {/* Breadcrumbs */}
            <div class="mb-4">
              <nav class="mb-4">
                <ol class="list-reset flex">
                  <li>
                    <a
                      href="/dashboard"
                      class="inline-flex items-center text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        class="mr-2.5 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="h-5 w-5 text-gray-500 mx-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <a href="/" class="text-gray-500 hover:text-gray-900">
                        Users
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="h-5 w-5 text-gray-500 mx-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="text-gray-400">Profile</span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 class="font-semibold text-gray-900 text-2xl">Profile</h1>
            </div>
            {/* Profile info */}
            <Switch fallback={<div>User profile not found.</div>}>
              <Match
                when={data.state === "pending" || data.state === "unresolved"}
              >
                <div class="m-auto">
                  <div
                    class="inline-block h-12 w-12 animate-spin rounded-full border-[6px] border-solid border-rojo border-r-transparent align-[-0.125em] text-rojo motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                </div>
              </Match>
              <Match when={data.state === "ready"}>
                <div class="p-6 mb-4 rounded-lg bg-white shadow-sm">
                  <div class="flex">
                    <img
                      class="h-20 w-20 rounded-lg"
                      src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                      alt="Jese portrait"
                    />
                    <div class="ml-4">
                      <h2 class="font-bold text-xl">{state.name}</h2>
                      <ul class="mt-2">
                        <li class="flex items-center text-sm text-gray-500">
                          <svg
                            class="h-4 w-4 mr-1 text-gray-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            ></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                          </svg>
                          Controlling
                        </li>
                        <li class="flex items-center text-sm text-gray-500 mt-[0.1rem]">
                          <svg
                            class="h-4 w-4 mr-1 text-gray-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Boskovice, Czech Republic
                        </li>
                      </ul>
                    </div>
                  </div>
                  <address class="text-sm font-normal not-italic text-gray-500">
                    <div class="mt-4">Email address</div>
                    <a
                      class="text-sm font-medium text-gray-700"
                      href={`mailto:${state.email}`}
                    >
                      {state.email}
                    </a>
                  </address>
                </div>
              </Match>
              <Match when={data.state === "errored"}>
                {JSON.stringify(data.error)}
              </Match>
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
