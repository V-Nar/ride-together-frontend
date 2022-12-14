import { PhotoCamera } from "@mui/icons-material";
import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [errors, setErrors] = useState();

  const level = [
    {
      value: "Beginner",
      label: "Beginner",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "Advanced",
      label: "Advanced",
    },
    {
      value: "Expert",
      label: "Expert",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    axios
      .post("https://ride-together.herokuapp.com/api/auth/signup", form)
      .then((response) => {
        console.log("succesfully submitted", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("hello", error);
        setErrors(error);
        setFormData({ username: "", email: "", password: "", level: "" });
      });
  };
  return (
    <div>
      <form className="formClass" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          id="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={formData.username}
          onChange={(event) =>
            setFormData({
              ...formData,
              username: event.target.value,
            })
          }
        />
        <TextField
          fullWidth
          required
          id="email"
          label="email"
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event.target.value,
            })
          }
        />
        <TextField
          fullWidth
          required
          id="password"
          label="password"
          variant="outlined"
          type="password"
          margin="normal"
          value={formData.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event.target.value,
            })
          }
        />
        <TextField
          id="level"
          select
          label="Level"
          fullWidth
          margin="normal"
          defaultValue={"Beginner"}
          value={level.value}
          onChange={(event) =>
            setFormData({
              ...formData,
              level: event.target.value,
            })
          }
          helperText="Please select the level you think you are !"
        >
          {level.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" component="label">
          Upload Image
          <input
            id="profilePic"
            name="profilePic"
            hidden
            accept="image/*"
            type="file"
            value={null}
            onChange={(event) =>
              setFormData({
                ...formData,
                profilePic: event.target.files[0],
              })
            }
          />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
        </IconButton>

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Sign up
        </Button>
      </form>
      {errors && <h3>{errors.message}</h3>}
    </div>
  );
};

export default SignUp;
