import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { formatAs } from "../utils/formatDate";
import { AuthContext } from "../contexts/AuthContext";
import JoinEvent from "../components/JoinEvent";
import LeaveEvent from "../components/LeaveEvent";

const Event = () => {
  const { id } = useParams();
  const { user, isLoading, isLoggedIn, token } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    if (isLoading || !token) {
      return;
    }

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .get(`https://ride-together.herokuapp.com/api/event/${id}`, config)
      .then((response) => {
        setEvents(response.data.eventDetails);
        setAttendees(response.data.eventAttendees);
        console.log(response.data.eventAttendees);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, id, isLoading]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>{events.title}</h1>
      <p>
        {formatAs.date(events.date)} {formatAs.time(events.date)}
      </p>
      <p>
        Location : {events.city} {events.adress}
      </p>
      <p>Promoter: {events.promoter?.username}</p>
      <p>{events.isFinished}</p>
      <p>
        List of attendees:
        {attendees.map((x) => {
          return ` ${x.user.username} `;
        })}
      </p>
      {!attendees.some((e) => e.user.username === user.username) ? (
        <JoinEvent id={id} setAttendees={setAttendees} />
      ) : (
        <LeaveEvent id={id} setAttendees={setAttendees} />
      )}
    </>
  );
};

export default Event;
