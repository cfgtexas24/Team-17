// This will fetch patient data from Firestore
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Patient } from './interfaces'; 

const patientsCollection = collection(db, 'patients');

// Function to add a new patient to Firestore
export const addPatient = async (patient: Patient) => {
    try {
        await addDoc(patientsCollection, patient);
        console.log('Patient added successfully!');
    } catch (error) {
        console.error('Error adding patient:', error);
    }
};

// Function to fetch all patients data from Firestore
export const getPatientsData = async (): Promise<Patient[]> => {
    try {
        const snapshot = await getDocs(patientsCollection);
        return snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                name: data.name || 'Unknown',
                age: data.age || 0,
                dob: data.dob || 'Unknown',
                contact_info: {
                    phone: data.contact_info?.phone || '',
                    email: data.contact_info?.email || '',
                },
                medical_history: {
                    previous_pregnancies: data.medical_history?.previous_pregnancies || 0,
                    chronic_conditions: data.medical_history?.chronic_conditions || [],
                    allergies: data.medical_history?.allergies || [],
                },
                current_pregnancy_details: {
                    due_date: data.current_pregnancy_details?.due_date || '',
                    gestational_age_weeks: data.current_pregnancy_details?.gestational_age_weeks || 0,
                    complications: data.current_pregnancy_details?.complications || [],
                },
                appointments: data.appointments || [],
            };
        });
    } catch (error) {
        console.error('Error fetching patient data:', error);
        return [];
    }
};



