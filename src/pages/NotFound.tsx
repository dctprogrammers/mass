import { useNavigate } from "@solidjs/router";
import { Component, createEffect } from "solid-js";

const NotFound: Component = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  createEffect(() => {
    if (!token) {
      navigate("/signin", { replace: true });
    }
  });

  return <div>Page Not Found!!!</div>;
};

export default NotFound;
