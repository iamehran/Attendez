import React from "react";
import { EventsCarousel } from "./EventsCarousel";
import Heading from "./Heading";
import HorizontalRule from "./HorizontalRule";

export default function UpcomingEventsSection() {
  return (
    <div id="event" className="w-full px-6 pt-16 md:pt-20 lg:pt-24 bg-black h-full">
      <div className="w-full mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center h-full w-full">
          <Heading color="text-slate-50" label="Upcoming Events" />
          <HorizontalRule color="bg-white" />
          <div className="w-full p-6 md:p-8 lg:p-10 h-full">
            <EventsCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
