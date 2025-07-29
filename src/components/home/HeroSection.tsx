import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative hero-gradient h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Your Health Is Our Priority
          </h1>
          <p className="text-xl mb-8">
            Providing quality healthcare services with compassion and expertise in Kenya since 2005.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/appointment">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Book Appointment
              </Button>
            </Link>
            <Link to="/doctors">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Meet Our Doctors
              </Button>
            </Link>
          </div>
          <div className="mt-12 flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center">
              <span className="text-2xl font-bold mr-2">24/7</span>
              <span>Emergency Service</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
              <span className="font-bold">Call Now:</span> +254 700 111 222
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;