import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import { AuthContext } from "../contexts/AuthContext";
const EventList = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);
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
  // const filteredEvent = events.filter((x) => {
  //   if (input === "") {
  //     return x;
  //   } else {
  //     return x.name.toLowerCase().includes(input);
  //   }
  // });
  return (
    <div style={{marginTop:"4.5rem"}}>
      {events.map((event) => (
        <div key={event._id}>
          <EventCard event={event}></EventCard>
        </div>
      ))}
    </div>
  );
};

export default EventList;
