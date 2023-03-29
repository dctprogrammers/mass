import { Component, createEffect } from "solid-js";
import { useNavigate } from "solid-app-router";
// import { IRestRequest } from "../interfaces/rest.interfaces";
// import { restRequests, setRestRequests } from "../store";
// import RequestModal from "../components/RequestModal";
// import IconButton from "../components/IconButton";

import "./Home.css";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

const Home: Component = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  createEffect(() => {
    if (!token) {
      navigate("/signin", { replace: true });
    }
  });

  // const [showModal, setShowModal] = createSignal(false);

  // const requests: IRestRequest[] = [
  //   {
  //     id: "1",
  //     name: "Get Scores",
  //     description: "Getting scores from server",
  //     request: {
  //       method: "GET",
  //       url: "https://scorer-pro3.p.rapidapi.com/score/game123",
  //       headers: [
  //         {
  //           key: "X-RapidAPI-Host",
  //           value: "API_HOST_FROM_RAPID_API",
  //         },
  //         {
  //           key: "X-RapidAPI-Key",
  //           value: "API_KEY_FROM_RAPID_API",
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: "2",
  //     name: "Add Score",
  //     description: "Adding scores to server",
  //     request: {
  //       method: "POST",
  //       url: "https://scorer-pro3.p.rapidapi.com/score",
  //       headers: [
  //         {
  //           key: "X-RapidAPI-Host",
  //           value: "API_HOST_FROM_RAPID_API",
  //         },
  //         {
  //           key: "X-RapidAPI-Key",
  //           value: "API_KEY_FROM_RAPID_API",
  //         },
  //       ],
  //       body: JSON.stringify({
  //         score: 100,
  //         gameId: "123",
  //         userId: "test123",
  //       }),
  //     },
  //   },
  // ];

  return (
    <div>
      <Navbar />
      <Sidenav />
      {/* <div class="pt-[65px] ml-64 bg-gray-50 h-screen">Home</div> */}
    </div>
    // <div class="flex flex-col md:flex-row gap-4 h-full flex-1">
    //   <RequestModal
    //     show={showModal()}
    //     onModalHide={(id: string | null) => {
    //       setShowModal(!showModal());
    //       if (id) navigate(`/${id}`);
    //     }}
    //   />
    //   <div class="w-full md:w-1/4 bg-gray-200 dark:bg-black min-h-full border-gray-300 border p-4 rounded-lg">
    //     <div class="flex justify-between py-4">
    //       <h1 class="text-sm">Rest Requests</h1>
    //       <IconButton
    //         onClick={() => setShowModal(true)}
    //         icon="add"
    //         label="Add Request"
    //       />
    //     </div>
    //     <div class="list">
    //       {/* <For each={requests} fallback={<div>Loading ...</div>}> */}
    //       <For
    //         each={restRequests()}
    //         fallback={
    //           <button
    //             onClick={() => setShowModal(true)}
    //             class="cursor-pointer hover:bg-red-600 hover:text-white flex justify-between gap p-2 bg-white border rounded-md items-center w-full"
    //           >
    //             <p class="text-center w-full">No Requests. Click to add</p>
    //           </button>
    //         }
    //       >
    //         {(item) => (
    //           <Link href={`/${item.id}`} class="relative list__item">
    //             <div
    //               class="p-2 hover:bg-gray-300 cursor-pointer pr-12 rounded-lg mb-2"
    //               classList={{
    //                 "list__item--active": Boolean(
    //                   location.pathname === `/${item.id}`
    //                 ),
    //               }}
    //             >
    //               <div>{item.name}</div>
    //               <div class="text-xs break-all">
    //                 {item.request.method} {item.request.url}
    //               </div>
    //             </div>
    //             <ion-icon
    //               onclick={(e: MouseEvent) => {
    //                 e.preventDefault();
    //                 e.stopImmediatePropagation();
    //                 if (restRequests()?.length) {
    //                   const requests = restRequests() || [];
    //                   setRestRequests(requests.filter((i) => i.id !== item.id));
    //                   if (location.pathname === `/${item.id}`) {
    //                     navigate("/");
    //                   }
    //                 }
    //               }}
    //               class="absolute text-xl hover:scale-125 transition-all ease-in-out duration-100 hover:text-red-700 text-red-600 right-2 top-0 bottom-0 m-auto"
    //               name="trash"
    //             ></ion-icon>
    //           </Link>
    //         )}
    //       </For>
    //     </div>
    //   </div>
    //   <div class="flex-1 min-h-full">
    //     <Outlet />
    //   </div>
    // </div>
  );
};

export default Home;
