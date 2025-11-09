import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import { CalendarDays, Image, MapPin, Type } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateEvent = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  // 🧠 Convert the string date ("dd-MM-yyyy") into a JS Date object for the DatePicker
  const parsedDate = data.date
    ? parse(data.date, "dd-MM-yyyy", new Date())
    : new Date();

  const [formData, setFormData] = useState({
    title: data.title || "",
    description: data.description || "",
    eventType: data.eventType || "",
    thumbnail: data.thumbnail || "",
    location: data.location || "",
    date: parsedDate, // ✅ now a Date object
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle date change from DatePicker
  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = format(formData.date, "dd-MM-yyyy");

    const updatedEvent = {
      ...formData,
      date: formattedDate, // ✅ format date before sending
      createdBy: user.email,
    };
    console.log(updatedEvent);
    // PUT or PATCH request to update
    fetch(`http://localhost:3000/events/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          Swal.fire({
            title: "Updated!",
            text: "Event Updated Successfully!",
            icon: "success",
          });
          navigate("/upcoming-events");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to create event. Please check your inputs");
      });
  };

  return (
    <div className=" bg-gradient-to-b from-pink-200 via-white to-purple-10 rounded-2xl flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Update Your Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Created By */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Event Created By
            </label>
            <input
              type="text"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-50 text-gray-500"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Event Type
            </label>
            <div className="relative">
              <Type className="absolute left-3 top-3 text-pink-500" size={18} />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select type</option>
                <option value="Cleanup">Cleanup</option>
                <option value="Plantation">Plantation</option>
                <option value="Donation">Donation</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Thumbnail Image URL
            </label>
            <div className="relative">
              <Image
                className="absolute left-3 top-3 text-pink-500"
                size={18}
              />
              <input
                type="url"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-pink-500"
                size={18}
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <div className="relative">
              <CalendarDays
                className="absolute left-3 top-3 text-pink-500"
                size={18}
              />
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                minDate={new Date()}
                dateFormat="dd-MM-yyyy"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-200"
          >
            Update Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
