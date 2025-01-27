import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();

  // Handle click to navigate to the appointment booking page
  const handleCardClick = () => {
    navigate(`/doctor/book-appointment/${doctor._id}`);
  };

  return (
    <div
      className="card m-2"
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
    >
      <div className="card-header">
        Dr. {doctor.firstName} {doctor.lastName}
      </div>
      <div className="card-body">
        {/* Specialization */}
        <p>
          <b>Specialization:</b> {doctor.specialization}
        </p>

        {/* Experience */}
        <p>
          <b>Experience:</b> {doctor.experience} years
        </p>

        {/* Fees Per Consultation */}
        <p>
          <b>Fees Per Consultation:</b> ${doctor.feesPerConsultation}
        </p>

        {/* Timings */}
        <p>
          <b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
        </p>

        {/* Additional Fields (if applicable) */}
        {/* Example: Address, Phone, Email, etc. */}
        {doctor.address && (
          <p>
            <b>Address:</b> {doctor.address}
          </p>
        )}
        {doctor.phone && (
          <p>
            <b>Phone:</b> {doctor.phone}
          </p>
        )}
        {doctor.email && (
          <p>
            <b>Email:</b> {doctor.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;