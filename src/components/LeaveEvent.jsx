import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

const LeaveEvent = ({ id }) => {
  const handleClick = () => {
    const config = {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      },
      method: "delete",
      baseURL: "https://ride-together.herokuapp.com/api",
      url: `/event/attend/${id}`,
    };

    axios(config)
      .then(console.log("event left"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Leave event
    </Button>
  );
};

export default LeaveEvent;
