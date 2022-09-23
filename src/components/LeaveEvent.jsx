import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LeaveEvent = ({ id, setAttendees }) => {
  const { user } = useContext(AuthContext);
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
      .then((res) => {
        setAttendees((prev) => {
          return prev.filter((attendee) => {
            return attendee.user.username !== user.username;
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Button
      style={{ marginTop: "2rem" }}
      variant="contained"
      onClick={handleClick}
    >
      Leave event
    </Button>
  );
};

export default LeaveEvent;
