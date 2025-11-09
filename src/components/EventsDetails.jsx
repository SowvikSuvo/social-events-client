import { Tag } from "lucide-react";
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router";

const EventsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center p-4 rounded-2xl">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full overflow-hidden mb-10">
        <img
          src={data.thumbnail}
          alt={"e.title"}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 ">
          <h1 className="text-3xl font-bold text-purple-600 mb-2 text-center">
            {data.title}
          </h1>

          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FaUser size={16} className="mr-2 text-yellow-500" /> Created by:{" "}
            {data.createdBy}
          </div>

          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FaCalendarAlt size={16} className="mr-2 text-green-500" /> Date:{" "}
            {data.date}
          </div>

          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FaMapMarkerAlt size={16} className="mr-2 text-pink-500" />{" "}
            Location: {data.location}
          </div>

          <div className="mb-4 flex  items-center gap-1">
            <Tag size={16} className="mr-1 text-blue-500" />
            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
              {data.eventType}
            </span>
          </div>

          <p className="text-gray-700 mb-6">{data.description}</p>

          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
            onClick={() => alert("You joined the event! 🎉")}
          >
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
