import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";

const JoinedEvent = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(event);

  useEffect(() => {
    fetch(`http://localhost:3000/joined-event?email=${user?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      });
  }, []);

  const handleJoinedDeleteEvent = (_id) => {
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
        fetch(`http://localhost:3000/joined-event/${_id}?email=${user.email}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // navigate(0); // optional: you can replace with setEvent filter
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

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">
          Joined Events
        </h1>

        {event.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven’t joined any events yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.map((e) => (
              <div
                key={e._id}
                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <figure>
                  <img
                    src={
                      e.thumbnail ||
                      "https://source.unsplash.com/800x400/?charity,people"
                    }
                    alt={e.title || "Event image"}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-secondary">{e.title}</h2>
                  <p className="text-gray-600">
                    {e.description?.slice(0, 300)}...
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>📅 {e.date}</span>
                    <span>📍 {e.location}</span>
                  </div>
                  <div
                    onClick={() => handleJoinedDeleteEvent(e._id)}
                    className="card-actions mt-4"
                  >
                    <button className="btn btn-primary w-full">
                      Remove Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvent;
