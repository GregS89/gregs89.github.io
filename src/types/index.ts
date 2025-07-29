export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
  education: string[];
  schedule: DoctorSchedule[];
}

export interface DoctorSchedule {
  day: string;
  hours: string;
  available: boolean;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  testimonial: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  date: Date | undefined;
  time: string;
  reason: string;
}