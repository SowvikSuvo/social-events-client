import { CalendarDays, MapPin, Tag } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const UpcomingEvents = () => {
  const data = useLoaderData();
  const [events, setEvents] = useState(Array.isArray(data) ? data : []);
  const [loading, setLoading] = useState(false);
  const [eventType, setEventType] = useState("All");

  const handleFilter = (e) => {
    const selectedType = e.target.value;
    setEventType(selectedType);
    setLoading(true);

    fetch(
      `https://social-events-server-nine.vercel.app/filter?type=${selectedType}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setEvents([]) && setLoading(false));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);

    fetch(
      `https://social-events-server-nine.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setEvents([]) && setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Upcoming Events: <span className="text-secondary">{events.length}</span>
      </h2>

      {/* Search and Filter */}
      <div className="mb-6">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center mb-4"
        >
          <label className="input rounded-full mr-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button
            type="submit"
            className="btn btn-secondary text-xs px-2 rounded-full"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        <div className="flex justify-end">
          <select
            value={eventType}
            onChange={handleFilter}
            className="select select-bordered rounded-full w-60 px-4 py-2"
          >
            <option value="All">All</option>
            <option value="Donation">Donation</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Education">Education</option>
            <option value="Food Distribution">Food Distribution</option>
            <option value="Shelter Support">Shelter Support</option>
            <option value="Blood Donation">Blood Donation</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Plastic-Free Campaign">Plastic-Free Campaign</option>
            <option value="River or Lake Restoration">
              River or Lake Restoration
            </option>
            <option value="Recycling Workshop">Recycling Workshop</option>
            <option value="Animal Care Drive">Animal Care Drive</option>
            <option value="Winter Blanket Donation">
              Winter Blanket Donation
            </option>
            <option value="Free Medical Checkup Camp">
              Free Medical Checkup Camp
            </option>
          </select>
        </div>
      </div>

      {/* Events List */}
      {Array.isArray(events) && events.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              className="group shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
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

                <p className="flex items-center text-sm mb-2">
                  {event.description?.slice(0, 80)}...
                </p>

                <div className="flex items-center text-pink-500 text-sm mb-2">
                  <MapPin size={16} className="mr-1 text-pink-500" />
                  {event.location}
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Tag size={16} className="mr-1 text-blue-500" />
                  <span className="bg-blue-200 shadow rounded-full px-2 py-1">
                    {event.eventType}
                  </span>
                </div>

                <div className="flex items-center text-sm mb-4">
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
      ) : (
        <p className="text-center text-gray-500">No upcoming events found.</p>
      )}
    </div>
  );
};

export default UpcomingEvents;
