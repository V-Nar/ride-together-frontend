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
  return (
    <div>
      {events.map((event) => (
        <div>
          <EventCard event={event}></EventCard>
        </div>
      ))}
    </div>
  );
};

export default EventList;
