import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { doctors } from "@/data/doctors";

const DoctorsSection = () => {
  // Display only 3 doctors on the homepage
  const featuredDoctors = doctors.slice(0, 3);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of highly skilled and experienced doctors are dedicated to providing you with the best medical care possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDoctors.map((doctor) => (
            <div 
              key={doctor.id}
              className="doctor-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-secondary font-medium mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">Experience: {doctor.experience}</p>
                <Link to={`/doctors#doctor-${doctor.id}`}>
                  <Button variant="outline" className="w-full">
                    View Profile & Schedule
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/doctors">
            <Button variant="outline" className="group">
              View All Doctors
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;