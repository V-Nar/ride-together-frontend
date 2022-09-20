import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();
  const [errors, setErrors] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ride-together.herokuapp.com/api/auth/signup", formData)
      .then((response) => {
        console.log("succesfully submitted", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrors(error);
      });
  };
  return (
    <div>
      <form className="formClass" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required="required"
          autoComplete="name"
          value={formData.username}
          onChange={(event) =>
            setFormData({
              ...formData,
              username: event.target.value,
            })
          }
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          required="required"
          value={formData.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event.target.value,
            })
          }
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required="required"
          autoComplete="current-password"
          value={formData.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event.target.value,
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
        <label>Profile Picture</label>
        <input
          type="file"
          id="profilePic"
          name="profilePic"
          accept="image/png, image/jpeg"
          value={formData.image}
          onChange={(event) =>
            setFormData({
              ...formData,
              profilePic: event.target.value,
            })
          }
        ></input>
        <input type="submit" value="S'inscrire" />
      </form>
      {errors && <h3>{errors.response.data.message}</h3>}
    </div>
  );
};

export default SignUp;
