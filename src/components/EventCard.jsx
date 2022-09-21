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
import { formatAs } from "../utils/formatDate";
import "./EventCard.css";

const EventCard = (props) => {
  return (
    <div className="EventCard">
      <p>{props.event.title}</p>
      <p>Date: {formatAs.date(props.event.date)}</p>
      <p>Lieu: {props.event.city}</p>
      <p>Nombre de participants: {props.event.numOfAttendees}</p>
    </div>

    //   <Card className="eventCard">
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         height="140"
    //         image="https://media.gettyimages.com/photos/man-rides-inline-skates-backwards-picture-id1251698429?s=612x612"
    //         alt="green iguana"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           {props.event.title}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           Date : {formatAs.date(props.event.date)}
    //           <br />
    //           Location : {props.event.city}
    //           <br />
    //           Number of attendees {props.event.numOfAttendees}
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button size="small" color="primary">
    //         Sign in
    //       </Button>
    //     </CardActions>
    //   </Card>
    // );
  );
};

export default EventCard;
