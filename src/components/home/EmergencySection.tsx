import { Phone } from "lucide-react";

const EmergencySection = () => {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">24/7 Emergency Service</h3>
            <p className="text-white/80 text-lg">
              Our emergency department is available around the clock.
            </p>
          </div>
          <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
            <Phone className="h-8 w-8 text-white" />
            <div>
              <p className="text-white/80">Emergency Hotline</p>
              <p className="text-white text-2xl font-bold">+254 700 111 222</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;