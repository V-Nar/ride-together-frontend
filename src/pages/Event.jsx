import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatAs } from "../utils/formatDate";
import EventCard from "../components/EventCard";
import { AuthContext } from "../contexts/AuthContext";
import JoinEvent from "../components/JoinEvent";
import LeaveEvent from "../components/LeaveEvent";

const Event = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [attendees, setAttendees] = useState([]);
  console.log(attendees);
  // const { token } = useContext(AuthContext);

  const config = {
    headers: { Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN") },
  };

  const handleJoin = () => {};
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
  }, []);
  // if (!attendees.length) {
  //   return <p>Loading ...</p>;
  // }

  return (
    <>
      <h1>{events.title}</h1>
      <p>
        {formatAs.date(events.date)} {formatAs.time(events.date)}
      </p>
      <p>
        Location : {events.city} {events.adress}
      </p>
      <p>Promoter: {events.promoter}</p>
      <p>{events.isFinished}</p>
      <p>
        List of attendees:
        {attendees.map((x) => {
          return ` ${x.user.username} `;
        })}
      </p>
      {!attendees.some((e) => e.user.username === user.username) ? (
        <JoinEvent onClick={handleJoin} id={id} setAttendees={setAttendees} />
      ) : (
        <LeaveEvent id={id} setAttendees={setAttendees} />
      )}
    </>
  );
};

export default Event;
