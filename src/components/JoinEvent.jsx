import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

const JoinEvent = ({ id, setAttendees }) => {
  const handleClick = () => {
    const config = {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      },
      method: "post",
      baseURL: "https://ride-together.herokuapp.com/api",
      url: `/event/attend/${id}`,
    };
    axios(config)
      .then((res) => {
        setAttendees((prev) => {
          return [...prev, res.data];
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Button variant="contained" onClick={handleClick}>
      Join event
    </Button>
  );
};

export default JoinEvent;
