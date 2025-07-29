import { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. John Kamau",
    specialty: "Cardiology",
    experience: "15+ years",
    image: "/images/Cardiologist.jpg",
    description: "Dr. Kamau is a renowned cardiologist with extensive experience in treating heart conditions. He completed his medical training at the University of Nairobi and specialized in cardiology at Kenyatta National Hospital.",
    education: [
      "MD - University of Nairobi, 2005",
      "Cardiology Specialist - Kenyatta National Hospital, 2010",
      "Fellowship in Interventional Cardiology - Mayo Clinic, USA, 2012"
    ],
    schedule: [
      { day: "Monday", hours: "8:00 AM - 1:00 PM", available: true },
      { day: "Tuesday", hours: "2:00 PM - 6:00 PM", available: true },
      { day: "Wednesday", hours: "8:00 AM - 1:00 PM", available: true },
      { day: "Thursday", hours: "8:00 AM - 1:00 PM", available: true },
      { day: "Friday", hours: "Not Available", available: false },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM", available: true },
      { day: "Sunday", hours: "Not Available", available: false }
    ]
  },
  {
    id: 2,
    name: "Dr. Sarah Ochieng",
    specialty: "Pediatrics",
    experience: "12+ years",
    image: "/images/Pediatrician.jpg",
    description: "Dr. Ochieng is a compassionate pediatrician who specializes in child development and care. She has extensive experience working with children of all ages and is beloved by her young patients.",
    education: [
      "MD - Moi University, 2008",
      "Pediatrics Residency - Gertrude's Children's Hospital, 2012",
      "Child Development Fellowship - Boston Children's Hospital, USA, 2014"
    ],
    schedule: [
      { day: "Monday", hours: "9:00 AM - 3:00 PM", available: true },
      { day: "Tuesday", hours: "9:00 AM - 3:00 PM", available: true },
      { day: "Wednesday", hours: "Not Available", available: false },
      { day: "Thursday", hours: "9:00 AM - 3:00 PM", available: true },
      { day: "Friday", hours: "9:00 AM - 3:00 PM", available: true },
      { day: "Saturday", hours: "Not Available", available: false },
      { day: "Sunday", hours: "Not Available", available: false }
    ]
  },
  {
    id: 3,
    name: "Dr. David Mwangi",
    specialty: "Orthopedic Surgery",
    experience: "18+ years",
    image: "/assets/doctors/doctor3.jpg",
    description: "Dr. Mwangi is a highly skilled orthopedic surgeon who specializes in joint replacements and sports injuries. His surgical precision and patient care have earned him a reputation as one of Kenya's top orthopedic specialists.",
    education: [
      "MD - University of Nairobi, 2000",
      "Orthopedic Surgery Residency - Kenyatta National Hospital, 2006",
      "Fellowship in Joint Replacement - Hospital for Special Surgery, USA, 2008"
    ],
    schedule: [
      { day: "Monday", hours: "7:00 AM - 2:00 PM", available: true },
      { day: "Tuesday", hours: "7:00 AM - 2:00 PM", available: true },
      { day: "Wednesday", hours: "Surgery Days", available: false },
      { day: "Thursday", hours: "Surgery Days", available: false },
      { day: "Friday", hours: "7:00 AM - 12:00 PM", available: true },
      { day: "Saturday", hours: "Not Available", available: false },
      { day: "Sunday", hours: "Not Available", available: false }
    ]
  },
  {
    id: 4,
    name: "Dr. Patricia Wambui",
    specialty: "Obstetrics & Gynecology",
    experience: "14+ years",
    image: "/assets/doctors/doctor4.jpg",
    description: "Dr. Wambui is dedicated to women's health through all stages of life. She specializes in high-risk pregnancies and minimally invasive gynecological surgeries.",
    education: [
      "MD - University of Nairobi, 2007",
      "OB/GYN Residency - Aga Khan University Hospital, 2012",
      "Fellowship in Maternal-Fetal Medicine - Johns Hopkins Hospital, USA, 2014"
    ],
    schedule: [
      { day: "Monday", hours: "Not Available", available: false },
      { day: "Tuesday", hours: "9:00 AM - 4:00 PM", available: true },
      { day: "Wednesday", hours: "9:00 AM - 4:00 PM", available: true },
      { day: "Thursday", hours: "9:00 AM - 4:00 PM", available: true },
      { day: "Friday", hours: "9:00 AM - 4:00 PM", available: true },
      { day: "Saturday", hours: "9:00 AM - 12:00 PM", available: true },
      { day: "Sunday", hours: "Not Available", available: false }
    ]
  },
  {
    id: 5,
    name: "Dr. Michael Otieno",
    specialty: "General Medicine",
    experience: "10+ years",
    image: "/assets/doctors/doctor5.jpg",
    description: "Dr. Otieno provides comprehensive primary care services for the whole family. His holistic approach to medicine focuses on prevention and wellness.",
    education: [
      "MD - Egerton University, 2010",
      "Family Medicine Residency - Kenyatta University Teaching Hospital, 2015",
      "Diploma in Tropical Medicine - London School of Hygiene & Tropical Medicine, 2016"
    ],
    schedule: [
      { day: "Monday", hours: "8:00 AM - 5:00 PM", available: true },
      { day: "Tuesday", hours: "8:00 AM - 5:00 PM", available: true },
      { day: "Wednesday", hours: "8:00 AM - 5:00 PM", available: true },
      { day: "Thursday", hours: "Not Available", available: false },
      { day: "Friday", hours: "8:00 AM - 5:00 PM", available: true },
      { day: "Saturday", hours: "8:00 AM - 1:00 PM", available: true },
      { day: "Sunday", hours: "Not Available", available: false }
    ]
  },
  {
    id: 6,
    name: "Dr. Lucy Njeri",
    specialty: "Dermatology",
    experience: "8+ years",
    image: "/assets/doctors/doctor6.jpg",
    description: "Dr. Njeri specializes in medical and cosmetic dermatology. She has expertise in treating various skin conditions and is known for her caring approach to patient care.",
    education: [
      "MD - University of Nairobi, 2012",
      "Dermatology Residency - Kenyatta National Hospital, 2017",
      "Fellowship in Cosmetic Dermatology - University of Cape Town, South Africa, 2019"
    ],
    schedule: [
      { day: "Monday", hours: "10:00 AM - 4:00 PM", available: true },
      { day: "Tuesday", hours: "10:00 AM - 4:00 PM", available: true },
      { day: "Wednesday", hours: "Not Available", available: false },
      { day: "Thursday", hours: "10:00 AM - 4:00 PM", available: true },
      { day: "Friday", hours: "10:00 AM - 4:00 PM", available: true },
      { day: "Saturday", hours: "Not Available", available: false },
      { day: "Sunday", hours: "Not Available", available: false }
    ]
  }
];