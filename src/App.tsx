import { Component, createEffect } from "solid-js";
import { Route, Router, Routes } from "solid-app-router";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/users/Profile";

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
    // <Router>
    // <Router source={hashIntegration()}>
    <Router>
      {/* <div class="flex flex-col h-full min-h-screen"> */}
      <main class="flex-1 flex flex-col">
        {/* <main class="flex-1 flex flex-col h-full"> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={() => <div>Page Not Found!!!</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
