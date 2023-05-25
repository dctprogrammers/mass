import { Component, createEffect } from "solid-js";
import { Route, Router, Routes, useNavigate } from "@solidjs/router";
// import { Route, Router, Routes } from "solid-app-router";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/users/Profile";
import Organizations from "./pages/organizations/Organizations";
import Organization from "./pages/organizations/Organization";
import NotFound from "./pages/NotFound";

const App: Component = () => {
  createEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }

    const use = async () => {
      (await import("tw-elements")).default;
    };

    use();
  });

  return (
    <Router>
      {/* <Router source={hashIntegration()}> */}
      {/* <div class="flex flex-col h-full min-h-screen"> */}
      <main class="flex-1 flex flex-col">
        {/* <main class="flex-1 flex flex-col h-full"> */}
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/organizations/organization" element={<Organization />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
