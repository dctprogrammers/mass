import { Component } from "solid-js";

const Navbar: Component = () => {
  return (
    <header class="bg-red-600 text-white py-2 px-8 h-16 flex items-center justify-between">
      <a class="hover:opacity-50 hero" href="/">
        MASS
      </a>
      <div class="flex items-center gap-4">
        <a class="hover:opacity-50" href="/about">
          About
        </a>
        <a class="hover:opacity-50" href="/signin">
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Navbar;
