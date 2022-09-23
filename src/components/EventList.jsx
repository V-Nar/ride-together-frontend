import EventCard from "./EventCard";
import "./EventList.css";

// rendering the list of event according to the parent component
const EventList = ({ eventsList }) => {
  return (
    <section className="EventList">
      {eventsList.map((event) => (
        <EventCard key={event.title} event={event}></EventCard>
      ))}
    </section>
  );
};

export default EventList;
