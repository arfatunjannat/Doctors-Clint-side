import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import AppointmentAvaible from '../AppointmentAvaible/AppointmentAvaible';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [data, setData] = React.useState(new Date());
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader date={data} setData={setData}></AppointmentHeader>
            <AppointmentAvaible date={data}></AppointmentAvaible>
        </div>
    );
};

export default Appointment;