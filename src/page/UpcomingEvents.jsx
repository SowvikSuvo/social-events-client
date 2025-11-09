import { CalendarDays, MapPin, Tag } from "lucide-react";
import React from "react";
import { Link, useLoaderData } from "react-router";

const UpcomingEvents = () => {
  const data = useLoaderData();
  console.log(data);

  // const today = new Date();
  // const upcomingEvents = data.filter((event) => new Date(event-date) >= today);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Upcoming Events: <span className="text-secondary">{data.length}</span>
      </h2>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming events found.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((event) => (
            <div
              key={event._id}
              className="group bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <img
                src={event.thumbnail}
                alt={event.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600">
                  {event.title}
                </h3>
                <p className="flex items-center text-gray-600 text-sm mb-2">
                  {event.description}
                </p>

                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin size={16} className="mr-1 text-pink-500" />
                  {event.location}
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-2 bg-">
                  <Tag size={16} className="mr-1 text-blue-500" />
                  <span className="bg-pink-100 rounded-full px-2 py-1">
                    {event.eventType}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <CalendarDays size={16} className="mr-1 text-green-500" />

                  {event.date}
                </div>

                <Link
                  to={`/events-details/${event._id}`}
                  className="block text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-xl font-medium hover:opacity-90 transition duration-200"
                >
                  View Event Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
