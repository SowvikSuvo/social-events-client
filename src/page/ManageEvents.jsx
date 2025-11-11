import React from "react";
import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [manage, setManage] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://social-events-server-nine.vercel.app/manage-event?email=${user.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setManage(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  const handleDeleteEvent = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://social-events-server-nine.vercel.app/manage-event/${_id}?email=${user.email}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(0);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="bg-base-300 rounded-2xl flex items-center justify-center py-10 px-2 sm:px-4">
      <div className="w-full max-w-6xl bg-base-100 shadow-2xl rounded-xl p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          All Events:{" "}
          <span className="text-primary font-semibold">{manage.length}</span>
        </h2>

        {/* 1. Wrap the table in a div with horizontal scroll */}
        <div className="overflow-x-auto rounded-lg table-responsive">
          <table className="table w-full text-sm sm:text-base">
            <thead className="bg-gradient-to-r from-primary to-secondary text-white">
              <tr>
                <th>SL No</th>
                {/* 2. Add class 'hide-mobile' to Image and Category columns */}
                <th className="hide-mobile">Image</th>
                <th>Title</th>
                <th className="hide-mobile">Category</th>
                <th>Location</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {manage.map((event, index) => (
                <motion.tr
                  key={event._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="hover:bg-base-200 transition-all duration-300"
                >
                  {/* 3. Add data-label attributes for stacking on mobile */}
                  <td data-label="SL No" className="text-center">
                    {index + 1}
                  </td>
                  <td
                    data-label="Image"
                    className="hide-mobile flex justify-center"
                  >
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover border border-base-300 hover:scale-110 transition-transform duration-300"
                    />
                  </td>
                  <td data-label="Title" className="font-semibold">
                    {event.title}
                  </td>
                  <td data-label="Category" className="hide-mobile">
                    {event.eventType}
                  </td>
                  <td data-label="Location">{event.location}</td>
                  <td data-label="Date">{event.date}</td>
                  <td
                    data-label="Actions"
                    className="flex flex-col sm:flex-row gap-2 justify-center items-center"
                  >
                    <Link
                      to={`/update-event/${event._id}`}
                      className="btn btn-xs sm:btn-sm btn-primary hover:scale-105 transition-transform"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDeleteEvent(event._id, event.title)}
                      className="btn btn-xs sm:btn-sm btn-error hover:scale-105 transition-transform"
                    >
                      Remove
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
