import { Component, createResource } from "solid-js";
import Footer from "../../components/Footer";
import { createStore } from "solid-js/store";
import axios from "axios";

const Organization: Component = () => {
  const [state, setState] = createStore<any[]>([]);

  const id = "635a7bed06af5d41b622b31a";

  const getOrganizations = async () => {
    await axios
      .get(`https://api.hardwario.cloud/v1/organization/${id}`, {
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
        <main class="min-h-[100vh]">Organization</main>
        <Footer />
      </div>
    </>
  );
};

export default Organization;
