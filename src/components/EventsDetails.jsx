import { Tag } from "lucide-react";
import React from "react";
import { useState } from "react";
import { use } from "react";
import { useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const EventsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  useEffect(() => {
    if (!user) return;

    fetch(`https://social-events-server-nine.vercel.app/events/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, user]);

  const handleJoined = () => {
    const joinedData = {
      eventId: data._id,
      title: data.title,
      description: data.description,
      eventType: data.eventType,
      thumbnail: data.thumbnail,
      location: data.location,
      date: data.date,
    };
    fetch(`https://social-events-server-nine.vercel.app/joined`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(joinedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          Swal.fire({
            title: "Joined Successfully!",
            text: "Welcome to our event!",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "info",
            title: "Already Joined",
            text: data.message || "You have already joined this event.",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to join",
          text: "Something went wrong. Try again later",
        });
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className=" loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div className="  flex items-center justify-center p-4 rounded-2xl ">
      <div className="bg-base-200 shadow-2xl rounded-2xl max-w-3xl w-full overflow-hidden mb-10 border-b-neutral-500">
        <img
          src={data.thumbnail}
          alt={"e.title"}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 ">
          <h1 className="text-3xl font-bold text-purple-600 mb-2 text-center">
            {data.title}
          </h1>

          <div className="flex items-center  text-sm mb-4">
            <FaUser size={16} className="mr-2 text-yellow-500" /> Created by:{" "}
            {data.createdBy}
          </div>

          <div className="flex items-center  text-sm mb-4">
            <FaCalendarAlt size={16} className="mr-2 text-green-500" /> Date:
            {""} {data.date}
          </div>

          <div className="flex items-center  text-sm mb-4">
            <FaMapMarkerAlt size={16} className="mr-2 text-pink-500" />{" "}
            Location: {data.location}
          </div>

          <div className="mb-4 flex  items-center gap-1">
            <Tag size={16} className="mr-1 text-blue-500" />
            <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
              {data.eventType}
            </span>
          </div>

          <p className=" mb-6">{data.description}</p>

          <button
            onClick={handleJoined}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
