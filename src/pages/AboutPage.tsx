import { Helmet } from "react-helmet";
import { teamMembers } from "@/data/team";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Afya Hospital</title>
        <meta name="description" content="Learn about Afya Hospital's mission, vision, values, history and our leadership team." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Afya Hospital</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Established in 2005, Afya Hospital has grown to become one of Kenya's leading healthcare providers,
            offering comprehensive medical services with a focus on quality, compassion, and accessibility.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide accessible, high-quality healthcare services that improve the health and wellbeing of
                the communities we serve, with compassion, integrity, and respect for all.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading healthcare provider in East Africa, recognized for excellence in patient care,
                medical innovation, and community health improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Excellence in all aspects of healthcare</li>
                <li>Compassion and empathy for our patients</li>
                <li>Integrity and ethics in our practice</li>
                <li>Respect for individuals and diversity</li>
                <li>Innovation and continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History and Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our History & Achievements</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    2005
                  </div>
                  <div className="h-full border-r-2 border-primary mx-auto w-0 mt-2"></div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold mb-2">Founded in Nairobi</h3>
                  <p className="text-gray-700">
                    Afya Hospital was established with the mission to provide quality healthcare services to the local community.
                    Started with just 20 beds and 5 doctors.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    2010
                  </div>
                  <div className="h-full border-r-2 border-primary mx-auto w-0 mt-2"></div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold mb-2">Expansion of Services</h3>
                  <p className="text-gray-700">
                    Expanded to include specialized departments such as Cardiology, Orthopedics, and a state-of-the-art
                    Maternity Wing. Increased bed capacity to 100.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    2015
                  </div>
                  <div className="h-full border-r-2 border-primary mx-auto w-0 mt-2"></div>
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold mb-2">Achievement of Excellence</h3>
                  <p className="text-gray-700">
                    Received accreditation from the Kenya Medical Association for excellence in healthcare.
                    Recognized as one of the top 5 hospitals in Kenya.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    2020
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Modern Healthcare Innovation</h3>
                  <p className="text-gray-700">
                    Implemented advanced electronic health records system and telemedicine services.
                    Opened a new research center focused on tropical diseases and public health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;