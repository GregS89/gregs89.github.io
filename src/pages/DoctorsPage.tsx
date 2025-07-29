import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { doctors } from "@/data/doctors";
import { Doctor } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  // Get unique specialties
  const specialties = ["all", ...new Set(doctors.map((doctor) => doctor.specialty))];

  useEffect(() => {
    let results = doctors;

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by specialty
    if (selectedSpecialty !== "all") {
      results = results.filter((doctor) => doctor.specialty === selectedSpecialty);
    }

    setFilteredDoctors(results);
  }, [searchTerm, selectedSpecialty]);

  return (
    <>
      <Helmet>
        <title>Our Doctors | Afya Hospital</title>
        <meta
          name="description"
          content="Meet our team of highly qualified doctors at Afya Hospital. Find doctor profiles, specialties, and schedules."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Doctors</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Meet our team of experienced medical professionals dedicated to providing you with the highest quality of care.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search by name or specialty..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Tabs defaultValue="all" onValueChange={setSelectedSpecialty} value={selectedSpecialty}>
                <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full max-w-3xl">
                  {specialties.map((specialty) => (
                    <TabsTrigger key={specialty} value={specialty}>
                      {specialty === "all" ? "All Specialties" : specialty}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-700 mb-4">No doctors match your search criteria.</h3>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedSpecialty("all"); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div id={`doctor-${doctor.id}`} key={doctor.id}>
                  <Card className="doctor-card h-full flex flex-col">
                    <div className="h-64 overflow-hidden">
                      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="flex-1 flex flex-col p-6">
                      <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                      <p className="text-secondary font-medium mb-3">{doctor.specialty}</p>
                      <p className="text-gray-700 mb-2">Experience: {doctor.experience}</p>
                      <p className="text-gray-700 mb-6 flex-1">{doctor.description.substring(0, 100)}...</p>
                      <Button className="w-full mb-4" onClick={() => document.getElementById(`schedule-${doctor.id}`)?.scrollIntoView({ behavior: 'smooth' })}>
                        View Schedule
                      </Button>
                      <Link to="/appointment" className="w-full">
                        <Button variant="outline" className="w-full">
                          Book Appointment
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Doctor Schedules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Doctor Schedules</h2>
          
          {filteredDoctors.map((doctor) => (
            <div key={`schedule-${doctor.id}`} id={`schedule-${doctor.id}`} className="mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <img src={doctor.image} alt={doctor.name} className="w-24 h-24 object-cover rounded-full" />
                  <div>
                    <h3 className="text-2xl font-bold">{doctor.name}</h3>
                    <p className="text-secondary font-medium">{doctor.specialty}</p>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2 text-gray-500" />
                        <span className="text-gray-700">+254 7XX XXX XXX</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2 text-gray-500" />
                        <span className="text-gray-700">{doctor.name.toLowerCase().replace(' ', '.')}@afyahospital.co.ke</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-lg mb-4">Weekly Schedule</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 font-medium">Day</th>
                          <th className="py-3 px-4 font-medium">Hours</th>
                          <th className="py-3 px-4 font-medium">Status</th>
                          <th className="py-3 px-4 font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctor.schedule.map((day, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="py-3 px-4 font-medium">{day.day}</td>
                            <td className="py-3 px-4">{day.hours}</td>
                            <td className="py-3 px-4">
                              {day.available ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Available
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Unavailable
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              {day.available ? (
                                <Link to="/appointment">
                                  <Button size="sm">Book</Button>
                                </Link>
                              ) : (
                                <Button size="sm" variant="outline" disabled>
                                  Unavailable
                                </Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-lg mb-4">Education & Qualifications</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {doctor.education.map((edu, index) => (
                      <li key={index} className="text-gray-700">{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to schedule an appointment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our doctors are committed to providing you with the best care possible. Book an appointment today!
          </p>
          <Link to="/appointment">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DoctorsPage;