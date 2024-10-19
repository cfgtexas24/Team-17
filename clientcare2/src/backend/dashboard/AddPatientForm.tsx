import React, { useState } from 'react';
import { addPatient } from './fetchdata';
import { Appointment, Patient } from './interfaces';
import './styles.css'; 

interface AddPatientFormProps {
    onAddPatient: (newPatient: Patient) => void;
}

const AddPatientForm: React.FC<AddPatientFormProps> = ({ onAddPatient }) => {
    const [newPatient, setNewPatient] = useState<Patient>({
        name: '',
        age: 0,
        dob: '',
        contact_info: {
            phone: '',
            email: '',
        },
        medical_history: {
            previous_pregnancies: 0,
            chronic_conditions: [],
            allergies: [],
        },
        current_pregnancy_details: {
            due_date: '',
            gestational_age_weeks: 0,
            complications: [],
        },
        appointments: [],
    });

    const [appointment, setAppointment] = useState<Appointment>({ date: '', notes: '', doctor: '' });
    const [event, setEvent] = useState<{ date: string; notes: string; event: string }>({ date: '', notes: '', event: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Handle nested properties
        if (name.startsWith('contact_info.')) {
            const key = name.split('.')[1];
            setNewPatient((prev) => ({
                ...prev,
                contact_info: {
                    ...prev.contact_info,
                    [key]: value,
                },
            }));
        } else if (name.startsWith('medical_history.')) {
            const key = name.split('.')[1];
            const newValue = key === 'chronic_conditions' || key === 'allergies' ? value.split(',').map(item => item.trim()) : value;
            setNewPatient((prev) => ({
                ...prev,
                medical_history: {
                    ...prev.medical_history,
                    [key]: newValue,
                },
            }));
        } else if (name.startsWith('current_pregnancy_details.')) {
            const key = name.split('.')[1];
            const newValue = key === 'complications' ? value.split(',').map(item => item.trim()) : value;
            setNewPatient((prev) => ({
                ...prev,
                current_pregnancy_details: {
                    ...prev.current_pregnancy_details,
                    [key]: newValue,
                },
            }));
        } else if (name.startsWith('appointment.')) {
            const key = name.split('.')[1];
            setAppointment((prev) => ({
                ...prev,
                [key]: value,
            }));
        } else if (name.startsWith('event.')) {
            const key = name.split('.')[1];
            setEvent((prev) => ({
                ...prev,
                [key]: value,
            }));
        } else {
            setNewPatient((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleAddAppointment = () => {
        setNewPatient((prev) => ({
            ...prev,
            appointments: [...prev.appointments, appointment],
        }));
        setAppointment({ date: '', notes: '', doctor: '' }); // Reset appointment input fields
    };

    const handleAddEvent = () => {
        setNewPatient((prev) => ({
            ...prev,
            appointments: [...prev.appointments, { ...event, doctor: '' }], // Add event as an appointment with an empty doctor field
        }));
        setEvent({ date: '', notes: '', event: '' }); // Reset event input fields
    };

    const handleRemoveAppointment = (index: number) => {
        setNewPatient((prev) => ({
            ...prev,
            appointments: prev.appointments.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addPatient(newPatient);
        onAddPatient(newPatient); // Call the passed prop to notify parent component
        console.log('Patient added:', newPatient);
        // Reset form or handle post-submit logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} />
            <input type="date" name="dob" placeholder="DOB" onChange={handleChange} />

            <h3>Contact Information</h3>
            <input type="text" name="contact_info.phone" placeholder="Phone" onChange={handleChange} />
            <input type="email" name="contact_info.email" placeholder="Email" onChange={handleChange} />

            <h3>Medical History</h3>
            <input type="number" name="medical_history.previous_pregnancies" placeholder="Previous Pregnancies" onChange={handleChange} />
            <textarea name="medical_history.chronic_conditions" placeholder="Chronic Conditions (comma-separated)" onChange={handleChange} />
            <textarea name="medical_history.allergies" placeholder="Allergies (comma-separated)" onChange={handleChange} />

            <h3>Current Pregnancy Details</h3>
            <input type="date" name="current_pregnancy_details.due_date" placeholder="Due Date" onChange={handleChange} />
            <input type="number" name="current_pregnancy_details.gestational_age_weeks" placeholder="Gestational Age (weeks)" onChange={handleChange} />
            <textarea name="current_pregnancy_details.complications" placeholder="Complications (comma-separated)" onChange={handleChange} />

            <h3>Appointments</h3>
            <input type="date" name="appointment.date" value={appointment.date} placeholder="Appointment Date" onChange={handleChange} />
            <input type="text" name="appointment.notes" value={appointment.notes} placeholder="Notes" onChange={handleChange} />
            <input type="text" name="appointment.doctor" value={appointment.doctor} placeholder="Doctor" onChange={handleChange} />
            <button type="button" onClick={handleAddAppointment} className="custom-button">Add Appointment</button>


            <h4>Appointments History</h4>
            <ul>
                {newPatient.appointments.map((appt, index) => (
                    appt.doctor && ( // Only display doctor's visits
                        <li key={index}>
                            {appt.date} - {appt.notes} with {appt.doctor}
                            <button type="button" onClick={() => handleRemoveAppointment(index)} className='custom-button'>Remove</button>
                        </li>
                    )
                ))}
            </ul>

            <h3>Events</h3>
            <input type="date" name="event.date" value={event.date} placeholder="Event Date" onChange={handleChange} />
            <input type="text" name="event.notes" value={event.notes} placeholder="Notes" onChange={handleChange} />
            <input type="text" name="event.event" value={event.event} placeholder="Event" onChange={handleChange} />
            <button type="button" onClick={handleAddEvent} className='custom-button'>Add Event</button>

            <h4>Event List</h4>
            <ul>
                {newPatient.appointments.map((appt, index) => (
                    appt.event && ( // Only display events
                        <li key={index}>
                            {appt.date} - {appt.event}
                            <button type="button" onClick={() => handleRemoveAppointment(index)}>Remove</button>
                        </li>
                    )
                ))}
            </ul>

            <button type="submit" className='custom-button'>Add Patient</button>
        </form>
    );
};

export default AddPatientForm;





