// Define Patient interface
export interface Appointment {
    date: string; // Use ISO date format for consistency
    notes: string;
    doctor?: string; // In case you want to record a doctor
    event?: string; // In case you want to record an event
}

export interface Patient {
    name: string;
    age: number;
    dob: string;
    contact_info: {
        phone: string;
        email: string;
    };
    medical_history: {
        previous_pregnancies: number;
        chronic_conditions: string[];
        allergies: string[];
    };
    current_pregnancy_details: {
        due_date: string;
        gestational_age_weeks: number;
        complications: string[];
    };
    appointments: Appointment[]; // Use the Appointment interface here
}
