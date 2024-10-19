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
  { id: 4, date: new Date(2024, 9, 21), patientName: 'Emily White', time: '10:30 AM', reason: 'Ultrasound' },
{ id: 5, date: new Date(2024, 9, 21), patientName: 'Olivia Brown', time: '01:00 PM', reason: 'Gestational Diabetes Screening' },
{ id: 6, date: new Date(2024, 9, 22), patientName: 'Sophia Davis', time: '09:45 AM', reason: 'Routine Pregnancy Check Up' },
{ id: 7, date: new Date(2024, 9, 22), patientName: 'Lily Johnson', time: '11:00 AM', reason: 'Fetal Growth Monitoring' },
{ id: 8, date: new Date(2024, 9, 23), patientName: 'Ava Martinez', time: '02:30 PM', reason: 'Third Trimester Check Up' },
{ id: 9, date: new Date(2024, 9, 23), patientName: 'Ella Wilson', time: '08:00 AM', reason: 'Labor and Delivery Planning' },
{ id: 10, date: new Date(2024, 9, 24), patientName: 'Mia Thomas', time: '10:15 AM', reason: 'Postpartum Follow Up' }

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