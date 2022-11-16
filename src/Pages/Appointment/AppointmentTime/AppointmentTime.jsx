import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";

const AppointmentTime = ({ dateSelected }) => {
  const [treatment, setTreatment] = useState({});
  const date = format(dateSelected, "PP")

  // use tanstack query
  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async() => {
        const res = await fetch(`http://localhost:5000/appointment-options?date=${date}`);
        const data = await res.json();
        return data.result;
    },
  });
  
  return (
    <section className="my-10">
      <p className="text-center text-secondary font-bold">
        Available appointment on {format(dateSelected, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <AppointmentModal dateSelected={dateSelected} treatment={treatment} setTreatment={setTreatment} refetch={refetch}/>
      )}
    </section>
  );
};

export default AppointmentTime;
