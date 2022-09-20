import "./App.css";
import EventList from "./components/EventList";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from './pages/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<EventList />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
