import { Component } from "solid-js";
import Navbar from "../components/Navbar";

const Dashboard: Component = () => {
  return (
    <>
      <Navbar />
      <div class="flex flex-col md:flex-row gap-4 h-full flex-1 bg-white dark:bg-gray-800 dark:text-gray-100">
        Dashboard
      </div>
    </>
  );
};

export default Dashboard;
