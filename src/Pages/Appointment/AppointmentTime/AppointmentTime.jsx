import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AppointmentTime = ({ dateSelected }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])

    // load appointment options
    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-10'>
            <p className='text-center text-secondary'>
                Available appointment on {format(dateSelected, "PP")}
            </p>
            <div>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} appointmentOption={appointmentOption} />)
                }
            </div>
        </section>
    );
};

export default AppointmentTime;