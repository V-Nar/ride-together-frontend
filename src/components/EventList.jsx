import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import { AuthContext } from "../contexts/AuthContext";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  
  useEffect(() => {
    axios
      .get("https://ride-together.herokuapp.com/api/event", {
        withCredentials: true,
      })
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
    
    const upcomingEvents = events.filter(event => event.isFinished === false)

    const pastEvents = events.filter(event => event.isFinished === true)
   

  return (
    <div style={{ marginTop: "4.5rem" }}>
      {upcomingEvents.length ?
        upcomingEvents.map((event) =>
          <div key={event._id}>
            <EventCard event={event}></EventCard>
          </div>
        )
        : pastEvents.map((event) =>
          <div key={event._id}>
            <EventCard event={event}></EventCard>
          </div>
        )
      }
    </div>
  );
};

export default EventList;
