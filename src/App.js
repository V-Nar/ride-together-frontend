import "./App.css";
import EventList from "./components/EventList";
import NavBarMUI from "./components/NavBarMUI"

function App() {
  return (
    <div className="App">
      <NavBarMUI />
      <EventList />
    </div>
  );
}

export default App;
