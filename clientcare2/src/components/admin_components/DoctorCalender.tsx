import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Sample data
const appointments = [
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
    <div>
      <div className="flex min-h-screen relative">
      <div className="fixed left-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
      <div className="w-3/5 p-4 mx-auto">
        <div className="mb-4 shadow-top">
      <h1 className="font-bold text-3xl text-center mb-6 text-[#3a696e]">Appointment Calendar</h1>
      <div className="flex justify-between mt-12">
        <div className="w-1/2">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        <div className="w-1/2 ml-6">
          <h2 className="text-xl font-semibold mb-4">
            Appointments for {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '...'}
          </h2>
          {filteredAppointments.length > 0 ? (
            <ul className="list-none p-0">
              {filteredAppointments.map((appointment) => (
                <li key={appointment.id} className="p-2 bg-gray-200 mb-2 rounded">
                  <strong>{appointment.time}</strong> - {appointment.patientName} ({appointment.reason})
                </li>
              ))}
            </ul>
          ) : (
            <p>No appointments for this day.</p>
          )}
        </div>
      </div>
    </div>
    </div>
    <div className="fixed right-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
    </div>
    
    </div>
  );
};

export default DoctorCalendar;