import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import EmergencySection from "@/components/home/EmergencySection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Afya Hospital - Quality Healthcare in Kenya</title>
        <meta name="description" content="Afya Hospital provides quality healthcare services in Kenya. Book appointments online, meet our doctors, and learn about our specialized medical services." />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <EmergencySection />
    </>
  );
};

export default HomePage;