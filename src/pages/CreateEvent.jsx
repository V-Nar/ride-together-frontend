import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SendIcon from "@mui/icons-material/Send";

const CreateEvent = () => {
  const { isLoggedIn, isLoading, token, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading!</p>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const config = {
    headers: { Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN") },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ride-together.herokuapp.com/api/event/", formData, config)
      .then((response) => {
        navigate(`/profile/${user._id}`);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error);
      });
  };

  return (
    <>
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
              title: e.target.value,
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
          InputProps={{ inputProps: { min: Date() } }}
          required
          value={formData.date}
          onChange={(e) =>
            setFormData({
              ...formData,
              date: e.target.value,
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
              address: e.target.value,
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
              city: e.target.value,
            })
          }
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Create event
        </Button>
      </form>
      {errors && <h3>{errors.response.data.message}</h3>}
    </>
  );
};

export default CreateEvent;
