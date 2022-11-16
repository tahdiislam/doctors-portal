import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";

const AppointmentTime = ({ dateSelected }) => {
  const [treatment, setTreatment] = useState({});

  // use tanstack query
  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async() => {
        const res = await fetch("http://localhost:5000/appointment-options");
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
        <AppointmentModal dateSelected={dateSelected} treatment={treatment} />
      )}
    </section>
  );
};

export default AppointmentTime;
