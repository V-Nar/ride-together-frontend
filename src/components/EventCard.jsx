import React from "react";
import { Link } from "react-router-dom";
import { formatAs } from "../utils/formatDate";
import './EventCard.css'

const EventCard = (props) => {
  return (
  <Link to="/event" style={{textDecoration:'none'}}>
    <div className="EventCard">
      <p>{props.event.title}</p>
      <p>{formatAs.date(props.event.date)}</p>
      <p>City: {props.event.city}</p>
      <p>Attendees: {props.event.numOfAttendees}</p>
    </div>
  </Link>
  );
};

export default EventCard;
