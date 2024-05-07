import { Image } from "antd";
import { useState } from "react";

export default function Card({
  src,
  title,
  date,
  description,
  type,
  registerationHandler,
  eventId,
  qr,
  registered,
}) {
  // const [qr, setQr] = useState('')

  // const [registered, setRegistered] = useState(false)

  // useEffect(() =>{
  //   console.log('registered event is ', registeredEventsData)
  //   let check = registeredEventsData.find((a) =>{
  //     return a.eventId == eventId
  //   });
  //   console.log('check is ', check)

  //   if(check) {
  //     setRegistered(true)
  //     setQr(check.qrCode)
  //   }
  // }, [registeredEventsData])

  const [image, setImage] = useState(true);

  return (
    <div class="max-w-sm bg-gray-900 border border-gray-200 rounded-lg shadow ">
      <img class="rounded-t-lg" src={src} className="h-[300px] w-[400px] rounded-t-md" alt="" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
        <p class="mb-3 font-normal text-gray-400">{description}</p>
        <p class="mb-3 font-normal text-gray-400">{date.substr(0, 10)}</p>
        <p class="mb-3 font-normal text-gray-400">{type}</p>

        {registered ? (
          <button
            onClick={() => {
              console.log("setting image");
              setImage(true);
            }}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <a href={qr} download>
              Download Qr
            </a>

            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            onClick={() => {
              registerationHandler(eventId);
            }}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Register
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
