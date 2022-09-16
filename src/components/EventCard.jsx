import React from "react";
import { formatAs } from "../utils/formatDate";
import './EventCard.css'

const EventCard = (props) => {
 
  return (
  <div className="EventCard">
    <p>{props.event.title}</p>
    <p>Date: {formatAs.date(props.event.date)}</p>
    <p>Lieu: {props.event.city}</p>
    <p>Nombre de participants: {props.event.numOfAttendees}</p>
  </div>
  );
};

export default EventCard;
