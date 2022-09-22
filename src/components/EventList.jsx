import { Link } from "react-router-dom";
import EventCard from "./EventCard";

const EventList = ({ eventsList }) => {
  return (
    <>
      {eventsList.map((event) => (
        <div key={event._id}>
          <Link to={`/events/${event._id}`} style={{ textDecoration: "none" }}>
            <EventCard event={event}></EventCard>
          </Link>
        </div>
      ))}
    </>
  );
};

export default EventList;
