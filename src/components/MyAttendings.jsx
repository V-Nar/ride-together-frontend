import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import EventList from "./EventList";

const MyAttendings = () => {
  const [events, setEvents] = useState([]);

  // get infos from the attendies collection
  useEffect(() => {
    axios
      .get("https://ride-together.herokuapp.com/api/user/joined", {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        },
      })
      // filtering existing events and return them as an usable array
      .then((response) => {
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

  // check response return
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
