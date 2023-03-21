import { Component, createEffect, lazy } from "solid-js";
import { hashIntegration, Route, Router, Routes } from "solid-app-router";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import RequestIndex from "./pages/Request";
// import { fetchSelectedRequest } from "./data-functions/fetch-selected-request";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
const RequestById = lazy(() => import("./pages/Request/[id]"));

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
    <Router source={hashIntegration()}>
      <div class="flex flex-col h-full min-h-screen">
        <main class="flex-1 flex flex-col h-full bg-neutral-100 dark:bg-neutral-700">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<RequestIndex />} />
              <Route
                path="/:id"
                element={<RequestById />}
                data={fetchSelectedRequest}
              />
            </Route> */}
            <Route path="*" element={() => <div>Page Not Found!!!</div>} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
