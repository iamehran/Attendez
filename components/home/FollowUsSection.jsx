import { ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import Heading from "./Heading";
import HorizontalRule from "./HorizontalRule";
import { motion } from "framer-motion";

export default function FollowUsSection({ isWhite }) {
  const primary = isWhite ? "white" : "black";
  const secondary = isWhite ? "black" : "white";
  const level = isWhite ? 900 : 100;
  return (
    <div id="contact" className={`w-full px-6 pt-16 md:pt-20 lg:pt-24 text-${secondary} bg-${primary} h-full`}>
      <div className="w-full mx-auto max-w-screen-2xl">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <Heading label="Follow Us" color={`text-${secondary}`} />
          <HorizontalRule color={`bg-${secondary}`} />
          <div className="w-full h-full p-0 md:p-8 lg:p-10">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex flex-col w-full h-full justify-center">
                <div className="uppercase text-lg text-center md:text-left md:text-xl xl:text-2xl py-4 pt-8 md:pt-4">
                  <h1>Social Media and Contact</h1>
                </div>
                <div className="w-full pt-6 ">
                  <Handle
                    primary={primary}
                    secondary={secondary}
                    level={Math.abs(800 - level)}
                    label="instagram"
                    link={""}
                  />
                  <Handle
                    primary={primary}
                    secondary={secondary}
                    level={Math.abs(800 - level)}
                    label="Linkedin"
                    link={""}
                  />
                  <Handle
                    primary={primary}
                    secondary={secondary}
                    level={Math.abs(800 - level)}
                    label="github"
                    link={""}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col space-y-5 items-center md:flex-row justify-between my-10">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl lg:text-3xl xl:text-4xl border border-slate-${level} py-1 px-4 md:px-6 md:py-2 lg:px-8 lg:py-3 xl:px-10 xl:py-4 rounded-full`}
                  >
                    attendez@chitkara.edu.in
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl lg:text-3xl xl:text-4xl uppercase"
                  >
                    privacy policy
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Handle = ({ label, link, primary, secondary, level }) => {
  return (
    <div className="w-full">
      <Link href={link}>
        <div className="w-full relative">
          <div
            className={`py-10 h-full border-y border-slate-${level} bg-green-500 text-${primary} w-full uppercase`}
          >
            <Marq label={label} />
          </div>
          <motion.div
            whileHover={{ opacity: "0", transition: { duration: 0.5, ease: "easeInOut" } }}
            id="label"
            className={`absolute origin-center hidden sm:flex inset-0 w-full h-full text-3xl md:text-5xl justify-center md:justify-start py-5 border-y border-slate-500 uppercase items-center text-${secondary} bg-${primary}`}
          >
            {label}
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

const Marq = ({ label }) => {
  return (
    <div className="marq-animation h-full w-full">
      <div className="gap-2 relative flex overflow-hidden select-none h-full gap-x-12 w-full">
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-3xl md:text-4xl lg:text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-3xl md:text-4xl lg:text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-3xl md:text-4xl lg:text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-3xl md:text-4xl lg:text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-3xl md:text-4xl lg:text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-3xl md:text-4xl lg:text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
        <div className="marquee__content flex justify-between gap-x-10 items-center text-4xl md:text-5xl lg:text-6xl h-full">
          <div>{label}</div>
          <div className="rotate-45 text-3xl md:text-4xl lg:text-5xl">
            <ArrowUpOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
