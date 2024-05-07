import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Navigation } from "swiper";
import axios from "axios";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Image from "antd";
import Card from './EventCard'


export const EventsCarousel = () => {
  const [eventsData, setEventsData] = useState([])
  const [registeredEventsData, setRegisteredEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const eventsDataFetcher = async() =>{
    try {
      setLoading(true);
      let response = await axios.get('/api/home/getEvents');
      if(response.data.status == true) {
        setEventsData(response.data.data);
      }
      setLoading(false);
      return;
    }catch(e){
      console.log('error in fetching data ', e);
      return;
    }
  }

  const registeredEventsDataFetcher = async() =>{
    try {
      // setLoading(true);
      let response = await axios.get('/api/admin/event/get-registeration-data');
      if(response.data.status == true) {
        
        setRegisteredEventsData(response.data.data);
      }
      // setLoading(false);
      return;
    }catch(e){
      console.log('error in fetching data ', e);
      return;
    }
  }
  const session = useSession({})
  const registerationHandler = async(eventId) =>{
    if(session.status != 'authenticated') {
      signIn()
    }else {
      let response = await axios.get(`/api/admin/event/register-event?eventId=${eventId}&userId=${session.data.user.id}`);
      if(response.data.status == true) {
        window.alert("Successfull")
        window.location.reload()
      }
    }
  }

  useEffect(() =>{
    eventsDataFetcher();
  }, [])

  useEffect(() =>{
    if(session.status == 'authenticated') {
      registeredEventsDataFetcher()
    }
  }, [session.status])
  return(
  <>

    {loading == false ?  <Swiper
      loop={true}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        648: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      navigation={false}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {eventsData
        .map((data, i) => {
          let checkData = registeredEventsData.find((a) =>{return a.eventId == data.id})
          return (
          <SwiperSlide key={i} className="flex items-center h-full w-full justify-center">
            <Card src={data.poster} qr={checkData && checkData.qrCode || ''} registered={checkData ?true : false} eventId={data.id} registeredEventsData={registeredEventsData} registerationHandler={registerationHandler} title={data.title} date={data.date} description={data.description} type={data.eventType}/>
          </SwiperSlide>
          )
      })}
    </Swiper> : 
    <div className="w-full flex flex-row justify-center">

          <div className="text-white text-2xl">Loading!!!</div>
</div>}
   
  </>
  )
};

