import React from "react";

export default function HorizontalRule({ color }) {
  return (
    <div className="w-[95%] h-2 relative flex max-w-screen-2xl">
      <div className={"h-full p-1 absolute top-0 left-0 rotate-45 " + color}></div>
      <div className={"w-full absolute inset-0 top-[40%] h-[20%] " + color}></div>
      <div className={"h-full p-1 absolute top-0 right-0 rotate-45 " + color}></div>
    </div>
  );
}
