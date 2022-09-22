import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const DeleteProfile = () => {
  const { id } = useParams();
  const { user, checkLogin } = useContext(AuthContext);

  const handleClickDelete = () => {
    const config = {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      },
      method: "delete",
      baseURL: "https://ride-together.herokuapp.com/api",
      url: `/user/${id}`,
    };
    axios(config)
      .then((response) => {
        console.log("user deleted");
        localStorage.removeItem("AUTH_TOKEN");
        checkLogin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Button onClick={handleClickDelete} variant="contained">
      Delete Profile
    </Button>
  );
};

export default DeleteProfile;
