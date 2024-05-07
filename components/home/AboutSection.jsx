import { useState } from "react";
import { Modal } from "antd";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import ContactModal from "./ContactModal";
import { PlayCircleFilled } from "@ant-design/icons";
export const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  return (
    <section
      ref={ref}
      className="h-screen relative w-screen bg-zinc-900 flex items-center justify-center"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex h-full w-full p-3 sm:p-12 lg:p-8 flex-col items-center justify-start md:justify-around space-y-5">
            <div className="w-full hidden md:flex justify-end items-center max-w-screen-2xl">
              <motion.div
                style={{
                  opacity: scrollYProgress,
                }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                className="w-full aspect-square relative origin-right flex items-center justify-center h-[20rem] bg-about bg-center bg-no-repeat saturate-0 contrast-125 rounded-full bg-cover"
              >
                <motion.div
                  style={{
                    opacity: scrollYProgress,
                  }}
                  className="absolute flex items-center aspect-square w-full h-full text-8xl justify-center"
                >
                  <PlayCircleFilled className="text-white" />
                </motion.div>
              </motion.div>
            </div>
            <div
              ref={ref}
              className="w-full h-full md:h-fit flex max-w-screen-2xl md:items-start md:justify-start items-center justify-center text-slate-100 text-lg sm:text-2xl xl:text-3xl"
            >
              <div className="flex w-[90%]  text-center md:text-left sm:w-[70%]">
                <p className="w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias placeat
                  dolor, sed blanditiis ea totam tempore saepe cum officia sequi, itaque neque a!
                  Odit quia quod rem laudantium illum accusantium. Saepe dolor reiciendis fuga atque
                  nisi? Quisquam, optio accusantium asperiores aperiam vitae sit enim quaerat
                  praesentium voluptatibus aut aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactGenie scrollYProgress={scrollYProgress} />
    </section>
  );
};

function ContactGenie({ scrollYProgress }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <motion.div
        initial={{
          scale: 0,
        }}
        style={{
          scale: scrollYProgress,
        }}
        className="absolute cursor-pointer font-sans h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bottom-12 mx-auto md:right-12 text-white"
        onClick={showModal}
      >
        <div className="h-full relative p-2 w-full">
          <div className="spin-animation scale-100 rounded-full backdrop-blur-lg min-w-full w-full h-full">
            <img src="/images/contactText.svg" alt="" />
          </div>
          <div className="absolute flex p-4 justify-center items-center inset-0 h-full w-full">
            <img src="/images/genie.png" className="h-2/3" />
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        <Modal
          className="modalStyle"
          // content={<ContactModal onOk={handleOk} onCancel={handleCancel} />}
          maskClosable={true}
          wrapClassName="backdrop-blur-sm"
          style={{ top: 10 }}
          width={"50rem"}
          open={isModalOpen}
          keyboard={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ContactModal onOk={handleOk} onCancel={handleCancel} />
        </Modal>
      </AnimatePresence>
    </>
  );
}
