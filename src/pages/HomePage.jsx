import axios from "axios";
import React, { useEffect, useState } from "react";
import EventList from "../components/EventList";

const HomePage = () => {
  const [events, setEvents] = useState([]);

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

  const upcomingEvents = events.filter((event) => event.isFinished === false);
  const pastEvents = events.filter((event) => event.isFinished === true);

  let eventsList = upcomingEvents;

  if (!upcomingEvents) {
    eventsList = pastEvents;
  }
  return (
    <>
      <EventList eventsList={eventsList} style={{ overflowX: "none" }} />
    </>
  );
};

export default HomePage;
