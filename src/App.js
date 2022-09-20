import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import EventList from "./components/EventList";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreateEvent from "./pages/CreateEvent";
import SignUp from "./pages/SignUp";
import Event from "./pages/Event";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<EventList />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="new" element={<CreateEvent />} />
          <Route path="event/:id" element={<Event />} />
          <Route path="my-events" element={<EventList />} />
          <Route path="my-attendies" element={<EventList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
