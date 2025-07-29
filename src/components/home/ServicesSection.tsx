import { ArrowRight, Activity, Baby, Stethoscope, Heart, Bone, Pill, Microscope, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

// Icon mapping
const iconMapping: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-10 w-10 text-secondary" />,
  baby: <Baby className="h-10 w-10 text-secondary" />,
  "baby-bottle": <Baby className="h-10 w-10 text-secondary" />,
  scalpel: <Activity className="h-10 w-10 text-secondary" />,
  "heart-pulse": <Heart className="h-10 w-10 text-secondary" />,
  bone: <Bone className="h-10 w-10 text-secondary" />,
  tooth: <Pill className="h-10 w-10 text-secondary" />,
  flask: <FlaskConical className="h-10 w-10 text-secondary" />,
  scan: <Microscope className="h-10 w-10 text-secondary" />,
};

const ServicesSection = () => {
  // Display only 6 services on the homepage
  const featuredServices = services.slice(0, 6);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive healthcare services to meet all your medical needs with the highest standards of quality and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all duration-300"
            >
              <div className="mb-4">
                {iconMapping[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;