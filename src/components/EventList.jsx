import EventCard from "./EventCard";

const EventList = ({ eventsList }) => {
  return (
    <>
      {eventsList.map((event) => (
        <div key={event._id}>
          <EventCard event={event}></EventCard>
        </div>
      ))}
    </>
  );
};

export default EventList;
