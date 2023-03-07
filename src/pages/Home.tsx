import { Component, createSignal, For } from "solid-js";
import { Link, Outlet } from "solid-app-router";
import { restRequests } from "../store";
import RequestModal from "../components/RequestModal";

const Home: Component = () => {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <div class="flex flex-col md:flex-row gap-4 h-full flex-1">
      <div onclick={() => setShowModal(!showModal())}>
        <RequestModal
          show={showModal()}
          onModalHide={(id: string | null) => {
            setShowModal(!showModal());
          }}
        />
      </div>
      <div class="w-full md:w-1/4 bg-gray-200 min-h-full border-gray-300 border p-4 rounded-lg">
        <div class="flex justify-between py-4">
          <h1 class="text-sm">Rest Requests</h1>
          <button
            onclick={() => setShowModal(true)}
            class="flex hover:bg-opacity-60 justify-center items-center"
          >
            <div>+</div>
          </button>
        </div>
        <div class="list">
          <For each={restRequests()} fallback={<div>Loading ...</div>}>
            {(item) => (
              <Link href={`/${item.id}`} class="relative list__item">
                <div
                  class="p-2 hover:bg-gray-300 cursor-pointer pr-12 rounded-lg mb-2"
                  classList={{
                    "list__item--active": Boolean(
                      location.pathname === `/${item.id}`
                    ),
                  }}
                >
                  <div>{item.name}</div>
                  <div class="text-xs break-all">
                    {item.request.method} {item.request.url}
                  </div>
                </div>
              </Link>
            )}
          </For>
        </div>
      </div>
      <div class="flex-1 min-h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
