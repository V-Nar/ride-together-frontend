import axios from "axios";
import React, { useEffect, useState } from "react";
import EventList from "./EventList";

const MyAttendings = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://ride-together.herokuapp.com/user/joined", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
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
      <h3>MyAttendings</h3>
      <EventList eventsList={events} />
    </div>
  );
};

export default MyAttendings;
