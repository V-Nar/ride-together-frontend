import "./App.css"
import EventList from "./components/EventList"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Layout from "./pages/Layout"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<EventList />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
