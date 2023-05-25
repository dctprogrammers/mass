import { Component } from "solid-js";
import Footer from "../components/Footer";

const Dashboard: Component = () => {
  return (
    <>
      <div
        id="main-content"
        class="bg-gray-50 dark:bg-gray-900 dark:text-white"
      >
        {/* <div id="main-content" class="pt-[65px] ml-64 bg-gray-50"> */}
        <section class="min-h-[90vh] ">Dashboard</section>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
