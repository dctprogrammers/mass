import axios from "axios";
import { Component, createResource, For, Match, Switch } from "solid-js";
import { createStore } from "solid-js/store";
import Footer from "../../components/Footer";

const Organizations: Component = () => {
  const [state, setState] = createStore<any[]>([]);

  const getOrganizations = async () => {
    await axios
      .get("https://api.hardwario.cloud/v1/organizations", {
        // .get("https://api.hardwario.cloud/v1/organizations?fields=name,enabled", {
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

  const [data] = createResource(getOrganizations);

  return (
    <>
      <div id="main-content" class="bg-gray-50">
        {/* <div id="main-content" class="pt-[65px] ml-64 bg-gray-50"> */}
        <main class="min-h-[100vh]">
          <Switch fallback={<div>Not Found</div>}>
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
              <div class="flex flex-col md:flex-row gap-4 h-full flex-1 dark:text-neutral-100">
                <div class="flex flex-col">
                  <div class="overflow-x-auto">
                    <div class="inline-block min-w-full">
                      <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                          <thead class="border-b font-medium bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-100 dark:text-neutral-800">
                            <tr>
                              <th scope="col" class="px-6 py-4">
                                Index
                              </th>
                              <th scope="col" class="px-6 py-4">
                                Name
                              </th>
                              <th scope="col" class="px-6 py-4">
                                Enabled
                              </th>
                              <th scope="col" class="px-6 py-4">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <For each={state}>
                              {(org, i) => (
                                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-50 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                  <td class="whitespace-nowrap px-6 py-4 font-medium text-center">
                                    {i() + 1}
                                  </td>
                                  <td class="whitespace-nowrap px-6 py-4">
                                    <a
                                      href="/organizations/organization"
                                      class="mr-1 rounded-lg p-2.5 transition duration-150 ease-in-out hover:bg-white hover:text-gray-900 hover:underline dark:hover:bg-neutral-700 dark:focus:text-neutral-300"
                                    >
                                      {org.name}
                                    </a>
                                  </td>
                                  <td class="whitespace-nowrap px-6 py-4">
                                    {org.enabled === true ? "True" : "False"}
                                  </td>
                                  <td class="whitespace-nowrap px-6 py-4">
                                    <a
                                      href=""
                                      class="mr-1 rounded-lg p-2.5 transition duration-150 ease-in-out hover:bg-white hover:text-gray-900 hover:underline dark:hover:bg-neutral-700 dark:focus:text-neutral-300"
                                    >
                                      Edit
                                    </a>
                                  </td>
                                </tr>
                              )}
                            </For>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Match>
            <Match when={data.state === "errored"}>
              {JSON.stringify(data.error)}
            </Match>
          </Switch>
          {/* </section> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Organizations;
