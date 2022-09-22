import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import EventList from "./EventList";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);

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

  const myEvents = events.filter((event) => event.promoter === user._id);

  return (
    <div>
      <h3>My Events</h3>
      <EventList eventsList={myEvents} />
    </div>
  );
};

export default MyEvents;
