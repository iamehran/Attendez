import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavigationPanel({ navClose }) {
  const session = useSession();
  return (
    <motion.div
      key="nav-panel"
      initial={{
        x: "100%",
        // transformOrigin: "right",
        // clipPath: "circle(0% at 100% 0%)",
      }}
      animate={{
        x: "0%",
        // clipPath: "circle(150% at 100% 0%)",
        transition: { duration: 0.5, ease: "easeIn" },
      }}
      exit={{
        x: "100%",
        // transformOrigin: "right",
        // clipPath: "circle(0% at 100% 0%)",
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      className="fixed h-screen top-0 right-0 bottom-0 z-[1302] bg-zinc-900/90 backdrop-blur-md text-slate-100 w-full md:w-[60%] lg:w-[40%]"
    >
      <div className="h-full flex flex-col justify-evenly space-y-6 w-full">
        <div className="relative">
          <div className="flex p-2 md:p-4 lg:p-6 w-full h-full justify-end">
            <button
              onClick={navClose}
              className="p-1 md:p-2 lg:p-4 text-xl md:text-2xl lg:text-3xl flex justify-center items-center w-10 h-10 md:w-12 md:h-12 lg:h-14 lg:w-14 blob"
            >
              <CloseOutlined />
            </button>
          </div>
        </div>
        <div className="flex w-full h-screen flex-col items-center md:items-baseline md:flex-row justify-center md:justify-evenly ">
          <div>
            <h1 className="text-4xl xl:text-6xl my-5">Socials</h1>
            <div>
              <ul className="text-2xl flex-wrap md:text-3xl flex flex-col items-center md:items-start space-y-5">
                <NavItem>Linkedin</NavItem>
                <NavItem>Instagram</NavItem>
                <NavItem>Facebook</NavItem>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-4xl xl:text-6xl my-5">Menu</h1>
            <div>
              <ul className="text-2xl flex-wrap md:text-3xl flex items-center md:items-start flex-col space-y-5">
                <NavItem>Home</NavItem>
                <NavItem>Team</NavItem>
                <NavItem>Events</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>Archive</NavItem>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-5 md:flex-row justify-between max-w-2xl place-self-center w-full p-4 xl:p-6">
          <div className="flex flex-col items-center md:items-start text-lg md:text-xl xl:text-2xl">
            <div className="uppercase w-fit">
              get in touch
              <motion.div
                className="w-full h-0.5 bg-green-200"
                initial={{ width: "40%", translateX: 0 }}
                animate={{
                  width: "60%",
                  translateX: 60,
                  transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0.2,
                    duration: 0.5,
                    type: "spring",
                  },
                }}
              ></motion.div>
            </div>
            <Link href={`mailto:attendez@chitkara.edu.in`}>attendez@chitkara.edu.in</Link>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={session.status == 'unauthenticated' ? signIn : signOut}
            className="uppercase px-2 py-1 text-base md:px-4 md:py-2 xl:px-6 xl:py-3 bg-slate-100 leading-none text-green-600 md:text-lg xl:text-xl"
          >
            {session.status == 'unauthenticated' ? 'Sign in' : 'Sign out'} &crarr;
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

const NavItem = ({ children }) => {
  return (
    <li className="hover:underline transform text-slate-400 hover:text-slate-200 transition-all ">
      <Link href="/">{children}</Link>
    </li>
  );
};
