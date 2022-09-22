import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import EventList from "./EventList";

const MyAttendings = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://ride-together.herokuapp.com/api/user/joined", {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setEvents(
          response.data.myJoinedEvents
            .filter((x) => x.event)
            .map((x) => x.event)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!events || !events.length) {
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
