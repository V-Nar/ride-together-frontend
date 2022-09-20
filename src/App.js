<<<<<<< HEAD
import "./App.css";
import EventList from "./components/EventList";
import NavBarMUI from "./components/NavBarMUI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
=======
import "./App.css"
import EventList from "./components/EventList"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Layout from "./pages/Layout"
>>>>>>> main

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<EventList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
=======
        <Route element={<Layout />}>
          <Route path="/" element={<EventList />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
>>>>>>> main
      </Routes>
    </div>
  );
}

export default App;
