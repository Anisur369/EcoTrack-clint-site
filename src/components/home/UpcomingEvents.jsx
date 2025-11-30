import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3000/events");
      const data = await response.json();
      const sortedData = data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      const upcomingFour = sortedData.slice(0, 4);
      setEvents(upcomingFour);
    };
    fetchEvents();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          📅 Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <FaCalendarAlt className="text-blue-500" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{event.location}</span>
              </div>

              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
