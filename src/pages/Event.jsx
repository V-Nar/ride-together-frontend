import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatAs } from "../utils/formatDate";
import EventCard from "../components/EventCard";
import { AuthContext } from "../contexts/AuthContext";
import JoinEvent from "../components/JoinEvent";

const Event = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [attendees, setAttendees] = useState([]);
  // const { token } = useContext(AuthContext);

  const config = {
    headers: { Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN") },
  };

  useEffect(() => {
    axios
      .get(`https://ride-together.herokuapp.com/api/event/${id}`, config)
      .then((response) => {
        console.log(response.data);
        setEvents(response.data.eventDetails);
        setAttendees(response.data.eventAttendees);
        // console.log("information of attendees", response.data.eventAttendees);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  if (!attendees.length) {
    return <p>Loading ...</p>;
  }
  console.log("hello", attendees);
  return (
    <>
      <h1>{events.title}</h1>
      <p>
        {formatAs.date(events.date)} {formatAs.time(events.date)}
      </p>
      <p>
        List of attendees:
        {attendees.map((x) => {
          return ` ${x.user.username} `;
        })}
      </p>
      <JoinEvent id={id} />
      {/* <LeaveEvent id={id} /> */}
    </>
  );
};

export default Event;
