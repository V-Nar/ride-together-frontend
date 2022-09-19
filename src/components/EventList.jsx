import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./EventCard";
const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://ride-together.herokuapp.com/api/event")
      .then((response) => {
        setEvents(response.data.cityEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!events.length) {
    return <div className="loading">Loading...</div>;
  }
  // const filteredEvent = events.filter((x) => {
  //   if (input === "") {
  //     return x;
  //   } else {
  //     return x.name.toLowerCase().includes(input);
  //   }
  // });
  return (
    <div>
      {events.map((event) => (
        <div>
          <EventCard key={event._id} event={event}></EventCard>
        </div>
      ))}
    </div>
  );
};

export default EventList;
