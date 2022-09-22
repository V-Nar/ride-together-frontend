import { Button, CircularProgress, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import SendIcon from "@mui/icons-material/Send";
import MyEvents from "../components/MyEvents";
import MyAttendings from "../components/MyAttendings";

const ProfilePage = () => {
  const { user, isLoading, setUser } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(true);
  };

  const handleClickEdit = () => {
    setEdit(false);
    setFormData({
      password: "",
      level: "",
      email: "",
    });
  };

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
  const [formData, setFormData] = useState({
    profilePic: "",
    password: "",
    email: "",
    level: "",
  });

  useEffect(() => {
    if (edit) {
      setFormData({ ...formData, level: user.level, email: user.email });
    }
  }, [edit]);

  if (!user) {
    return <CircularProgress />;
  }

  const config = {
    headers: { Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN") },
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData();
    console.log(formData);
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    console.log("hello", form);
    axios
      .patch("https://ride-together.herokuapp.com/api/user", form, config)
      .then((response) => {
        setEdit(false);
        setUser(response.data);
        setFormData({
          password: "",
          level: "",
          email: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setEdit(false);
      });
  };
  return (
    <>
      {!edit ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <img
              style={{ height: "9rem" }}
              src={`${user?.profilePic}`}
              alt="profile pic"
            />
            <div style={{ textAlign: "left" }}>
              <h3>Username: {user.username}</h3>
              <h3>Email : {user.email}</h3>
              <h3>level : {user.level}</h3>
              <Button
                onClick={handleClick}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Edit profile
              </Button>
            </div>
          </div>
          <MyEvents />
          <MyAttendings />
        </div>
      ) : (
        <div>
          <form className="formClass" onSubmit={handleSubmit}>
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
              id="level"
              select
              label="Level"
              fullWidth
              margin="normal"
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
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Accept modification
            </Button>
            <Button variant="contained" onClick={handleClickEdit}>
              Cancel
            </Button>
          </form>
          {/* Need to put it to the right place  */}
        </div>
      )}
    </>
  );
};

export default ProfilePage;
