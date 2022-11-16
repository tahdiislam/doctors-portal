import axios from "axios";
import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../../Context/AuthProvider";

const AppointmentModal = ({ treatment, dateSelected, setTreatment, refetch }) => {
  const { user } = useContext(UserContext);
  const { name: treatmentName, slots } = treatment;
  const date = format(dateSelected, "PP");

  // form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    const slot = form.slot.value;
    
    // booking object
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      email,
      phone,
      slot
    }
    
    // post booking data
    axios.post("http://localhost:5000/bookings", booking)
    .then(res => {
      if(res.data?.result?.acknowledged){
        toast.success("Booking added successfully")
        refetch()
        setTreatment(false)
      }else{
        toast.error(res.data?.message)
        setTreatment(false)
      }
    })
    .catch(err => console.log(err))
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-accent text-white"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-1 gap-4 mt-6"
          >
            <input
              name="date"
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot, id) => (
                <option key={id} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <input
              disabled
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
            />
            <button type="submit" className="btn text-white btn-accent">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
