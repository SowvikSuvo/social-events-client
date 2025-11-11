import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { toast } from "react-hot-toast";
import { CalendarDays, Image, MapPin, Type } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";
import Swal from "sweetalert2";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "",
    thumbnail: "",
    location: "",
    date: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to create an event.");
      return;
    }
    const formattedDate = format(formData.date, "dd-MM-yyyy");

    const newEvent = {
      ...formData,
      date: formattedDate,
      createdBy: user.email,
    };
    console.log(newEvent);
    // Simulate successful API call
    fetch("https://social-events-server-nine.vercel.app/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          Swal.fire({
            title: "Created!",
            text: "Event created successfully!",
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
    <div className=" flex items-center justify-center px-4 py-10 bg-base-300 rounded-2xl">
      <div className="bg-base-100 shadow-2xl rounded-2xl p-8 max-w-2xl w-full border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Create a New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Title */}
          <div>
            <label className="block font-medium  mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium  mb-1">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Enter a short description..."
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
            />
          </div>
          <div>
            <label className="block font-medium  mb-1">Event created By</label>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter event title"
                value={user.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
              />
            </div>
          </div>

          {/* Event Type */}
          <div>
            <label className="block font-medium  mb-1">Event Type</label>
            <div className="relative">
              <Type className="absolute left-3 top-3 text-pink-500" size={18} />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
              >
                <option className="text-black" value="">
                  Select type
                </option>
                <option className="text-black" value="Cleanup">
                  Cleanup
                </option>
                <option className="text-black" value="Plantation">
                  Plantation
                </option>
                <option className="text-black" value="Donation">
                  Donation
                </option>
                <option className="text-black" value="Education">
                  Education
                </option>
                <option className="text-black" value="Food Distribution">
                  Food Distribution
                </option>
                <option className="text-black" value="Shelter Support">
                  Shelter Support
                </option>
                <option className="text-black" value="Blood Donation">
                  Blood Donation
                </option>
                <option className="text-black" value="Fundraising">
                  Fundraising
                </option>
                <option className="text-black" value="Plastic-Free Campaign">
                  Plastic-Free Campaign
                </option>
                <option
                  className="text-black"
                  value="River or Lake Restoration"
                >
                  River or Lake Restoration
                </option>
                <option className="text-black" value="Recycling Workshop">
                  Recycling Workshop
                </option>
                <option className="text-black" value="Animal Care Drive">
                  Animal Care Drive
                </option>
                <option className="text-black" value="Winter Blanket Donation">
                  Winter Blanket Donation
                </option>
                <option
                  className="text-black"
                  value="Free Medical Checkup Camp"
                >
                  Free Medical Checkup Camp
                </option>
              </select>
            </div>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block font-medium  mb-1">
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
                placeholder="https://example.com/image.jpg"
                value={formData.thumbnail}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium  mb-1">Location</label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-pink-500"
                size={18}
              />
              <input
                type="text"
                name="location"
                placeholder="Enter event location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
              />
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block font-medium  mb-1">Event Date</label>
            <div className="relative">
              <span>
                {" "}
                <CalendarDays
                  className="absolute left-3 top-3 text-pink-500"
                  size={18}
                />
              </span>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                minDate={new Date()}
                required
                dateFormat="dd-MM-yyyy"
                placeholderText="Select event date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 "
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-200"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
