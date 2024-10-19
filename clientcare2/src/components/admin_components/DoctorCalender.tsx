import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calander.css'; // You can define custom styles here
// Define the appointment structure
interface Appointment {
  id: number;
  date: Date;
  patientName: string;
  time: string;
  reason: string;
}
// Sample data
const appointments: Appointment[] = [
  { id: 1, date: new Date(2024, 9, 20), patientName: 'Sarah Doe', time: '10:00 AM', reason: 'Monthly Check Ups' },
  { id: 2, date: new Date(2024, 9, 20), patientName: 'Jane Smith', time: '11:30 AM', reason: 'Pre Natal Check Up' },
  { id: 3, date: new Date(2024, 9, 21), patientName: 'Sam Green', time: '09:00 AM', reason: 'Genetic Screening' },
];
// The Calendar component
const DoctorCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  // Filter appointments for the selected date
  const filteredAppointments = appointments.filter(
    (appointment) => selectedDate && appointment.date.toDateString() === selectedDate.toDateString()
  );
  return (
    <div className="calendar-container">
      <h1>Doctor's Appointment Calendar</h1>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <div className="appointment-list">
        <h2>Appointments for {selectedDate?.toDateString() || '...'}</h2>
        {filteredAppointments.length > 0 ? (
          <ul>
            {filteredAppointments.map((appointment) => (
              <li key={appointment.id}>
                <strong>{appointment.time}</strong> - {appointment.patientName} ({appointment.reason})
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments for this day.</p>
        )}
      </div>
    </div>
  );
};
export default DoctorCalendar;