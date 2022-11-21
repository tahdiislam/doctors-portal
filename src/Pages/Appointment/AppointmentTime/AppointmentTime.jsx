import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading";

const AppointmentTime = ({ dateSelected }) => {
  const [treatment, setTreatment] = useState({});
  const date = format(dateSelected, "PP")

  // use tanstack query
  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async() => {
        const res = await fetch(`https://doctors-portal-server-teal.vercel.app/appointment-options?date=${date}`);
        const data = await res.json();
        return data.result;
    },
  });

  // loading spinner 
  if(isLoading){
    return <Loading/>
  }
  
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
