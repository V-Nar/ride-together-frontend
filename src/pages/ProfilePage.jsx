import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { user, isLoading, setUser } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(true);
  };

  const [formData, setFormData] = useState({
    profilePicture: "",
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
    axios
      .patch("https://ride-together.herokuapp.com/api/user", formData, config)
      .then((response) => {
        setEdit(false);
        console.log(response.data);
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
    <div style={{ marginTop: "4.5rem" }}>
      {!edit ? (
        <div>
          <img src={`${user?.image}`} alt="user profile picture" />
          <h3>Username: {user.username}</h3>
          <h3>Email : {user.email}</h3>
          <h3>level : {user.level}</h3>
          <button onClick={handleClick}>Modification</button>
        </div>
      ) : (
        <form className="formClass" onSubmit={handleSubmit}>
          <label>Profil Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/png, image/jpeg"
            value={formData.image}
            onChange={(event) =>
              setFormData({
                ...formData,
                profilePicture: event.target.value,
              })
            }
          ></input>
          <label>password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(event) =>
              setFormData({
                ...formData,
                password: event.target.value,
              })
            }
          />
          <label>email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
          />
          <label>level</label>
          <select
            onChange={(event) =>
              setFormData({
                ...formData,
                level: event.target.value,
              })
            }
            id="level"
            name="level"
          >
            <option value="Beginner">Beginner</option>
            <option value="Medium">Medium</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
          {/* Need to put it to the right place  */}
          {/* <button onClick={setEdit(false)}>Cancel</button> */}
          <input type="submit" value="Enregistrer les modifications" />
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
