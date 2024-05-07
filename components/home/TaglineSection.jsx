import { CompassOutlined } from "@ant-design/icons";
import React from "react";
import HorizontalRule from "./HorizontalRule";
import Marquee from "./Marquee";

export default function TaglineSection() {
  return (
    <div className="w-full bg-white md:my-8 lg:my-12 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex h-full w-full p-0 flex-col items-center justify-start md:justify-around space-y-5">
          <div className="w-full border-2 border-yellow-50 text-5xl lg:text-7xl xl:text-8xl pt-5 items-center flex">
            <Marquee />
          </div>
          <HorizontalRule color="bg-black" />
          <div className="w-[90%] flex flex-row max-w-screen-2xl md:justify-between items-center justify-center text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <div className="flex items-center h-60 justify-start md:w-[20%]">
              <div className="text-7xl hidden spin-animation rounded-full border-2 border-slate-900 items-center justify-center md:flex p-4">
                <CompassOutlined />
              </div>
            </div>

            <div className="flex text-center w-full md:text-left md:w-[80%]">
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero porro autem,
                quia at officia eius perferendis. Quibusdam placeat deleniti exercitationem dolorum
                harum quasi veniam sit assumenda similique, facere officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
