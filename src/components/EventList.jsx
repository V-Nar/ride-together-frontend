import EventCard from "./EventCard";
import "./EventList.css";

const EventList = ({ eventsList }) => {
  return (
    <section className="EventList">
      {eventsList.map((event) => (
        <EventCard key={event._id} event={event}></EventCard>
      ))}
    </section>
  );
};

export default EventList;
