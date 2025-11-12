import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import { CalendarDays, Image, MapPin, Type } from "lucide-react";
import { useParams } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateEvent = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetch(`https://assigment-10-bice.vercel.app/events/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((event) => {
        const parsedDate = event.date
          ? parse(event.date, "dd-MM-yyyy", new Date())
          : new Date();

        setFormData({
          title: event.title || "",
          description: event.description || "",
          eventType: event.eventType || "",
          thumbnail: event.thumbnail || "",
          location: event.location || "",
          date: parsedDate,
        });
      })
      .catch((err) => {
        console.error("Failed to load event:", err);
        toast.error("Could not load event details.");
      });
  }, [user, id]);

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
      date: formattedDate,
    };
    console.log(updatedEvent);

    fetch(`https://assigment-10-bice.vercel.app/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
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
        }, 1000);
      })

      .catch((err) => {
        console.log(err);
        toast.error("Failed to create event. Please check your inputs");
      });
  };
  if (!formData)
    return (
      <div className=" flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  return (
    <div className="  rounded-2xl flex items-center justify-center px-4 py-10">
      <div className="shadow-xl rounded-2xl p-8 max-w-2xl w-full border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Update Your Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Title */}
          <div>
            <label className="block font-medium  mb-1">Event Title</label>
            <input
              type="text"
              name="title"
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
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
            />
          </div>

          {/* Created By */}
          <div>
            <label className="block font-medium  mb-1">Event Created By</label>
            <input
              type="text"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 "
            />
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
                value={formData.thumbnail}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium 0 mb-1">Location</label>
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-black"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium  mb-1">Event Date</label>
            <div className="relative ">
              <CalendarDays
                className="absolute left-3 top-3 text-pink-500 "
                size={18}
              />
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                minDate={new Date()}
                dateFormat="dd-MM-yyyy"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2  focus:ring-pink-500 "
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
