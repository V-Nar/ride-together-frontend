import "./App.css";
import EventList from "./components/EventList";
import NavBarMUI from "./components/NavBarMUI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
