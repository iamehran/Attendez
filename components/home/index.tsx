import { Righteous } from "@next/font/google";
import Navbar from "@/components/home/Navbar";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { ArrowDownOutlined } from "@ant-design/icons";
import { useState } from "react";
import NavigationPanel from "@/components/home/NavigationPanel";
import { AboutSection } from "@/components/home/AboutSection";
import TaglineSection from "@/components/home/TaglineSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import TechnologySection from "@/components/home/TechnologySection";
import TeamSection from "@/components/home/TeamSection";
import FollowUsSection from "@/components/home/FollowUsSection";

const font = Righteous({ subsets: ["latin"], weight: "400" });

const Sections = () => {
  return (
    <div className="relative">
      {/* <AboutSection /> */}
      <UpcomingEventsSection />
      <TaglineSection />
      {/* <TechnologySection /> */}
      <TeamSection />
      <FollowUsSection isWhite={false} />
    </div>
  );
};

const HomeMain = ({
  handleScroll,
  isNavOpen,
  handleNav,
}: {
  handleScroll: any;
  isNavOpen: boolean;
  handleNav: any;
}) => {
  const imgAnimation = useAnimation();
  const handleMouseMove = (e: any) => {
    const moveX = e.clientX - window.innerWidth / 2;
    const moveY = e.clientY - window.innerHeight / 2;
    const offsetFactor = 4;

    imgAnimation.start({
      transform: `translate(${moveX / offsetFactor}px, ${moveY / offsetFactor}px)`,
      transition: { delay: -1.5, duration: 1.5, ease: "easeOut" },
    });
  };

  return (
    // <motion.div initial={{ opacity: 0,backdropFilter:`blur(20px)` }} whileInView={{ opacity: 1, backdropFilter: "none" }}>
    <>
      <Navbar onOpen={handleNav} />

      <section
        id="home"
        onMouseMove={(e) => handleMouseMove(e)}
        className="flex select-none h-[90vh] w-full relative"
      >
        <div className="absolute inset-0 p-4 h-full flex items-center justify-center">
          <motion.img
            animate={imgAnimation}
            className="origin-center animateOnStart lg:h-[90%]"
            src="/images/blob.webp"
            alt=""
          />
        </div>
        <div
          className="w-full relative h-full items-center flex flex-col justify-center
      "
        >
          <div className="text-center text-slate-800 text-3xl md:text-5xl lg:text-7xl uppercase py-4 mb-12">
            <motion.h1
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              initial={{ scale: 0 }}
              className="inline-block"
            >
              Attendez <br />
              <span>Event Management Platform</span>
            </motion.h1>
          </div>
        </div>
        <div className="absolute md:inline-block text-sm lg:text-md text-green-600 h-fit lg:w-[33%] md:w-[42%] hidden xl:w-[25%] inset-0 md:left-16 lg:left-32 top-[80%] p-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ex amet voluptas
            quisquam suscipit ab ad distinctio laboriosam deleniti molestiae.
          </p>
        </div>
        <div className="absolute flex bottom-10 h-fit md:w-auto w-full items-center justify-center text-2xl md:text-2xl lg:text-3xl xl:text-5xl text-green-600 md:right-20 lg:right-32 top-[75%] p-4">
          <h1 className="flex flex-row md:flex-col lg:flex-row">
            <span>learn.</span>
            <span>build.</span>
            <span>innovate</span>
          </h1>
        </div>
        <button
          onClick={handleScroll}
          className="absolute flex bottom-8 h-fit lg:w-auto w-full items-center justify-center text-xl lg:text-2xl xl:text-3xl text-black lg:right-32"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="border-2 animate-bounce border-black rounded-full w-12 h-12 flex items-center justify-center relative">
              <ArrowDownOutlined className="p-2 text-green-600 mx-auto" />
            </div>
            <div>
              <div className="text-xs uppercase">scroll down</div>
            </div>
          </div>
        </button>
      </section>
      <AnimatePresence>{isNavOpen && <NavigationPanel navClose={handleNav} />}</AnimatePresence>
      {/* </motion.div> */}
    </>
  );
};

const FrontPage = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <main className={`${font.className} w-full bg-transparent -z-10`}>
        <HomeMain handleNav={handleNav} isNavOpen={navOpen} handleScroll={handleScroll} />
        <Sections />
      </main>
    </>
  );
};

export default FrontPage;
