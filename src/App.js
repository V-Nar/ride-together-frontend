import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreateEvent from "./pages/CreateEvent";
import SignUp from "./pages/SignUp";
import Event from "./pages/Event";
import About from "./pages/About";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="new" element={<CreateEvent />} />
          <Route path="events/:id" element={<Event />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<h2>404 not found</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
