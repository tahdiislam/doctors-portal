import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AppointmentTime from '../AppointmentTime/AppointmentTime';

const Appointment = () => {
    const [dateSelected, setDateSelected] = useState(new Date())
    return (
        <div>
            <AppointmentHeader dateSelected={dateSelected} setDateSelected={setDateSelected}/>
            <AppointmentTime dateSelected={dateSelected}/>
        </div>
    );
};

export default Appointment;