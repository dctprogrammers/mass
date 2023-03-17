import axios from "axios";
import { Component, createResource, For, Match, Switch } from "solid-js";
import { createStore } from "solid-js/store";
import Navbar from "../components/Navbar";

const Dashboard: Component = () => {
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

  // onMount(() => {
  //   getOrganizations();
  // });

  const [data] = createResource(getOrganizations);

  return (
    <>
      <Navbar />
      <div class="flex flex-col md:flex-row gap-4 h-full flex-1 bg-white dark:bg-gray-800 dark:text-gray-100">
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
                    <Switch fallback={<div>Not Found</div>}>
                      <Match
                        when={
                          data.state === "pending" ||
                          data.state === "unresolved"
                        }
                      >
                        Loading...
                      </Match>
                      <Match when={data.state === "ready"}>
                        <For each={state}>
                          {(org, i) => (
                            <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-50 dark:border-neutral-500 dark:hover:bg-neutral-600">
                              <td class="whitespace-nowrap px-6 py-4 font-medium text-center">
                                {i() + 1}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">
                                {org.name}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">
                                {org.enabled === true ? "True" : "False"}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">Edit</td>
                            </tr>
                          )}
                        </For>
                      </Match>
                      <Match when={data.state === "errored"}>
                        {JSON.stringify(data.error)}
                      </Match>
                    </Switch>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
