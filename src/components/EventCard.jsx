import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { formatAs } from "../utils/formatDate";
import "./EventCard.css";

// commented code to further applications with components library

const EventCard = (props) => {
  return (
    <Card style={{ width: "15rem" }} className="eventCard">
      <CardActionArea>
        <Link
          style={{ textDecoration: "none" }}
          to={`/events/${props.event._id}`}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://media.gettyimages.com/photos/man-rides-inline-skates-backwards-picture-id1251698429?s=612x612"
            alt="event pic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.event.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date : {formatAs.date(props.event.date)}
              <br />
              Location : {props.event.city}
              <br />
              Number of attendees {props.event.numOfAttendees}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );

  // <>
  // <Link
  //   className="cardLink"
  //   to={`/events/${props.event._id}`}
  //   style={{ textDecoration: "none" }}
  // >
  //     <div className="EventCard">
  //       <h1>{props.event.title}</h1>
  //       <p>{formatAs.date(props.event.date)}</p>
  //       <p>
  //         <span className="field">City:</span> {props.event.city}
  //       </p>
  //       <p>
  //         <span className="field">Attendees:</span>{" "}
  //         {props.event.numOfAttendees}
  //       </p>
  //     </div>
  //   </Link>
  // </>
  // );
};

export default EventCard;
