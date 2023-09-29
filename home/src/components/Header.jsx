import React from "react";

const Header = () => (
  <>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://cdn.svgporn.com/logos/react.svg"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Tienda 5Stars
        </h1>
      </div>
    </header>
  </>
);

export default Header;
