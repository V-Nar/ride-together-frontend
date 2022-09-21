import { TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const CreateEvent = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  if (isLoading) {
    return <p>Loading!</p>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const config = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ride-together.herokuapp.com/api/event/", formData, config)
      .then((response) => {
        navigate("/my-events");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="formClass">
      <TextField
        label="Title"
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        id="title"
        required
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Date"
        variant="outlined"
        margin="normal"
        fullWidth
        type="datetime-local"
        id="date"
        min={Date()}
        required
        value={formData.date}
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />
      <TextField
        label="Address"
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        id="address"
        required
        value={formData.address}
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />
      <TextField
        label="City"
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
        id="city"
        required
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />
      <input type="submit" value="Create your event" />
    </form>
  );
};

export default CreateEvent;
