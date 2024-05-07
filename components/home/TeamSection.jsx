import { data } from "autoprefixer";
import React from "react";
import Heading from "./Heading";
import HorizontalRule from "./HorizontalRule";

let reverse = false;

export default function TeamSection() {
  const team = [
    // {
    //   name: "anushka singh",
    //   avatar: "/images/team/anushka.png",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta rerum nam, quibusdam rem autem beatae laudantium tempore odio tenetur repellat perferendis? Dolore maxime beatae repellat praesentium soluta, omnis unde reiciendis, impedit blanditiis quos autem ullam ipsam! Vitae, assumenda ratione.",
    //   designation: "president",
    // },
    // {
    //   name: "chirag jain",
    //   avatar: "/images/team/chirag.png",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta rerum nam, quibusdam rem autem beatae laudantium tempore odio tenetur repellat perferendis? Dolore maxime beatae repellat praesentium soluta, omnis unde reiciendis, impedit blanditiis quos autem ullam ipsam! Vitae, assumenda ratione.",
    //   designation: "chairperson",
    // },
    // {
    //   name: "karan chugh",
    //   avatar: "/images/team/karan.png",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta rerum nam, quibusdam rem autem beatae laudantium tempore odio tenetur repellat perferendis? Dolore maxime beatae repellat praesentium soluta, omnis unde reiciendis, impedit blanditiis quos autem ullam ipsam! Vitae, assumenda ratione.",
    //   designation: "technical head",
    // },
    {
      name: "kaushik sharma",
      avatar: "/images/team/kaushik.png",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta rerum nam, quibusdam rem autem beatae laudantium tempore odio tenetur repellat perferendis? Dolore maxime beatae repellat praesentium soluta, omnis unde reiciendis, impedit blanditiis quos autem ullam ipsam! Vitae, assumenda ratione.",
      designation: "technical coordinator",
    },
    {
      name: "kaushik sharma",
      avatar: "/images/team/kaushik.png",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta rerum nam, quibusdam rem autem beatae laudantium tempore odio tenetur repellat perferendis? Dolore maxime beatae repellat praesentium soluta, omnis unde reiciendis, impedit blanditiis quos autem ullam ipsam! Vitae, assumenda ratione.",
      designation: "technical coordinator",
    },
  ];

  return (
    <div id="team" className="w-full px-6 pt-16 md:pt-20 lg:pt-24 bg-white h-full">
      <div className="w-full mx-auto max-w-screen-2xl">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <Heading label="Our team" color="text-green-600" />
          <HorizontalRule color="bg-green-600" />
          <div className="w-full h-full p-0 md:p-8 lg:p-10">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col w-full h-full justify-center items-center">
                {team.map((data, i) => {
                  return (
                    <Member
                      key={i}
                      reverse={i % 2 == 0}
                      avatar={data.avatar}
                      desc={data.about}
                      name={data.name}
                      designation={data.designation}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Member = ({ avatar, name, desc, designation }) => {
  reverse = !reverse;
  return (
    <div
      className={
        !reverse
          ? "flex flex-col md:flex-row-reverse gap-y-2 gap-x-0 lg:gap-x-3 xl:gap-x-10 2xl:px-16 items-center p-2 lg:p-5 justify-center lg:justify-between w-full"
          : "flex flex-col md:flex-row gap-y-2 gap-x-0 lg:gap-x-3 xl:gap-x-10 2xl:px-16 items-center p-2 lg:p-5 justify-center lg:justify-between w-full"
      }
    >
      <div className="w-1/2 sm:w-1/3">
        <div className="h-[50%] aspect-auto blurBg">
          <img
            className="rounded hover:scale-110 w-full h-full hover:-translate-y-4 md:hover:-translate-y-10 transition-all origin-top duration-200"
            src={avatar}
            alt={name}
          />
        </div>
      </div>
      <div
        className={
          reverse
            ? "flex w-full md:w-2/3 text-black flex-col justify-center items-center md:items-start text-center md:text-left p-1 md:p-3 lg:p-5 lg:pl-0"
            : "flex w-full md:w-2/3 text-black flex-col justify-center items-center md:items-end text-center md:text-left p-1 md:p-3 lg:p-5 lg:pl-0"
        }
      >
        <p className="text-sm sm:text-base mb-2 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 md:text-lg lg:text-xl xl:text-2xl">{desc}</p>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase text-green-500">
          {name}
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl uppercase text-green-500">
          {designation}
        </h2>
      </div>
    </div>
  );
};
