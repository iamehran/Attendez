import React from "react";

export default function Heading({ label, color }) {
  return (
    <div className="w-full mb-1 md:mb-2 lg:mb-5">
          <h1 className={color + " md:block md:ml-10 flex items-center justify-center pb-0 text-5xl md:text-7xl  xl:text-8xl 2xl:text-9xl uppercase"}>
        {label}
      </h1>
    </div>
  );
}
