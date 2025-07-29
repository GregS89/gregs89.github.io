import { Helmet } from "react-helmet";
import { services } from "@/data/services";
import {
  Activity, Baby, Stethoscope, Heart, Bone, Pill, Microscope, FlaskConical, ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Icon mapping
const iconMapping: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-12 w-12 text-secondary" />,
  baby: <Baby className="h-12 w-12 text-secondary" />,
  "baby-bottle": <Baby className="h-12 w-12 text-secondary" />,
  scalpel: <Activity className="h-12 w-12 text-secondary" />,
  "heart-pulse": <Heart className="h-12 w-12 text-secondary" />,
  bone: <Bone className="h-12 w-12 text-secondary" />,
  tooth: <Pill className="h-12 w-12 text-secondary" />,
  flask: <FlaskConical className="h-12 w-12 text-secondary" />,
  scan: <Microscope className="h-12 w-12 text-secondary" />,
};

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Afya Hospital</title>
        <meta name="description" content="Explore the comprehensive medical services offered at Afya Hospital including General Medicine, Pediatrics, Maternity, Surgery, and more." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            At Afya Hospital, we provide a wide range of healthcare services to meet the diverse needs of our patients.
            Our medical professionals are committed to delivering exceptional care in all specialties.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden service-card transition-all duration-300">
                <CardContent className="pt-6 p-6">
                  <div className="mb-6">
                    {iconMapping[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <Link to="/appointment">
                    <Button variant="outline" className="group">
                      Book Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Healthcare Under One Roof</h2>
              <p className="text-lg mb-6">
                Our mission is to provide comprehensive healthcare services that are accessible to all. 
                We continuously upgrade our facilities and train our staff to ensure we deliver the best care possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>State-of-the-art medical equipment</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Highly qualified medical professionals</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Patient-centered approach to healthcare</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>24/7 emergency services</span>
                </li>
              </ul>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Need Medical Consultation?</h3>
                <p className="mb-6">
                  Our team of medical professionals is ready to help you with any health concerns.
                  Schedule an appointment today or visit our emergency department for urgent care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/appointment">
                    <Button className="bg-white text-primary hover:bg-white/90">
                      Schedule Appointment
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;