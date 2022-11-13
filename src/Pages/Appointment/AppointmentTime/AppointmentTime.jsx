import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import AppointmentOption from './AppointmentOption';

const AppointmentTime = ({ dateSelected }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState({})

    // load appointment options
    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-10'>
            <p className='text-center text-secondary font-bold'>
                Available appointment on {format(dateSelected, "PP")}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment} />)
                }
            </div>
            {treatment &&
                <AppointmentModal
                    dateSelected={dateSelected}
                    treatment={treatment} />
            }
        </section>
    );
};

export default AppointmentTime;