import { CloseCircleOutlined, SendOutlined } from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";

export default function ContactModal({ onOk, onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onOk(data);
  };
  return (
    <div className="w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-fit place-self-center h-fit z-20 p-2 md:p-4 lg:p-6 xl:p-8 text-white border border-slate-600 rounded-lg bg-zinc-900">
      <div className="w-full h-full">
        <div className="w-full h-full">
          <div className="h-full w-full flex flex-col">
            <div className="h-[15%] px-3 rounded-md bg-zinc-800 w-full flex flex-row items-center justify-between">
              <div className="">
                <h1 className="uppercase text-xl md:text-3xl lg:text-5xl">Contact Us</h1>
              </div>
              <div
                className="text-md md:text-xl lg:text-3xl p-2 xl:p-5 pt-2 cursor-pointer"
                onClick={onCancel}
              >
                <CloseCircleOutlined />
              </div>
            </div>
            <div className=" w-full">
              <div className="flex flex-row items-center">
                <div className="text-left hidden md:flex flex-col space-y-1 md:space-y-3 lg:space-y-5 xl:space-y-7 w-1/2 text-lg">
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde modi ipsa
                    perspiciatis doloribus fugiat ad tempore iure labore praesentium.
                  </div>
                  <div className="uppercase">Chitkara University, Rajpura Punjab</div>
                  <div>attendez@chitkara.edu.in</div>
                  <div>9876543210</div>
                </div>
                <form className="w-full md:w-1/2 px-1 md:px-2 lg:px-3 2xl:px-5 text-slate-100">
                  <div className="flex flex-col">
                    <label
                      className="md:px-2 px-1 xl:px-3 py-1 lg:py-2 text-sm lg:text-base xl:text-lg"
                      htmlFor="name"
                    >
                      NAME
                    </label>
                    <input
                      className="bg-zinc-800 focus:bg-zinc-700 focus:outline-none text-sm md:text-base lg:text-xl font-extralight text-zinc-200 rounded-md py-1 md:py-2 lg:py-4 xl:py-6 md:px-2 px-1 xl:px-3"
                      type="text"
                      id="name"
                    />
                    <label
                      className="md:px-2 px-1 xl:px-3 py-1 lg:py-2 text-sm lg:text-base xl:text-lg"
                      htmlFor="name"
                    >
                      EMAIL
                    </label>
                    <input
                      className="bg-zinc-800 focus:bg-zinc-700 focus:outline-none text-sm md:text-base lg:text-xl font-extralight text-zinc-200 rounded-md py-1 md:py-2 lg:py-4 xl:py-6 md:px-2 px-1 xl:px-3"
                      type="email"
                      id="email"
                    />
                    <label
                      className="md:px-2 px-1 xl:px-3 py-1 lg:py-2 text-sm lg:text-base xl:text-lg"
                      htmlFor="msg"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      className="bg-zinc-800 resize-none focus:bg-zinc-700 focus:outline-none text-sm md:text-base lg:text-xl font-extralight text-zinc-200 rounded-md py-1 md:py-2 lg:py-4 xl:py-6 md:px-2 px-1 xl:px-3"
                      id="msg"
                      rows={5}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleSubmit}
                      className="place-self-center my-1 xl:my-3 2xl:my-5 flex flex-row items-center justify-between uppercase bg-zinc-800 py-0.5 md:py-1 lg:py-2 text-lg px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 rounded-md cursor-pointer"
                    >
                      Send
                      <span className="-rotate-45 text-sm h-full w-full">
                        <SendOutlined className="mx-1 h-[70%] w-full" />
                      </span>
                    </motion.div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function ContactModal() {
//   return (
//     <div className="w-full h-full z-20 text-white border rounded-lg border-slate-100 bg-zinc-800">
//       <div className="w-full h-full">
//         <div className="w-full h-full">
//           <div className="h-full w-full flex flex-col items-center justify-center">
//             <div className="h-1/5 w-full flex flex-row">
//               <div className="">
//                 <h1 className="uppercase text-5xl">Contact Us</h1>
//               </div>
//               <div>
//                 <CloseCircleOutlined />
//               </div>
//             </div>
//             <div className="h-4/5 w-full">
//               <div className="flex flex-row items-center justify-between">
//                 <div className="text-left">
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa beatae, saepe
//                   fugit aperiam mollitia aspernatur harum inventore tenetur repudiandae
//                   perferendis, qui esse, eaque aut. Repudiandae, excepturi ut. Non necessitatibus
//                   veniam molestiae, deserunt pariatur magni libero iste atque est eligendi,
//                   commodi error iure, id consequatur! Dicta accusamus ratione recusandae
//                   repudiandae molestiae.
//                 </div>
//                 <form>
//                   <div className="flex flex-col">
//                     <label htmlFor="name"></label>
//                     <input type="text" />
//                     <label htmlFor="name"></label>
//                     <input type="text" />
//                     <label htmlFor="name"></label>
//                     <input type="text" />
//                     <button>Send</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
