import "./App.css";
import EventList from "./components/EventList";
import NavBarMUI from "./components/NavBarMUI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <NavBarMUI />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
