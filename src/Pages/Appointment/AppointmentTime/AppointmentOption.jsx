import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots, price } = appointmentOption;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-secondary text-center">
            {name}
          </h2>
          <p className="text-center">
            {slots.length > 0 ? slots[0] : "Please try another day."}
          </p>
          <p className="text-center">
            {slots.length} {slots.length > 1 ? "spaces" : "space"}
          </p>
          <p className="text-center">Price: $<span>{price}</span></p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(appointmentOption)}
              htmlFor="my-modal-3"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;