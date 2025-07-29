import { Users, Building2, HeartPulse, Award } from "lucide-react";

const stats = [
  {
    value: "20+",
    label: "Years of Excellence",
    icon: <Award className="h-10 w-10 text-secondary" />,
    description: "Providing quality healthcare services since 2005"
  },
  {
    value: "30+",
    label: "Expert Doctors",
    icon: <Users className="h-10 w-10 text-secondary" />,
    description: "Experienced specialists across all major departments"
  },
  {
    value: "10k+",
    label: "Patients Served",
    icon: <HeartPulse className="h-10 w-10 text-secondary" />,
    description: "Trusted by thousands of patients annually"
  },
  {
    value: "15+",
    label: "Departments",
    icon: <Building2 className="h-10 w-10 text-secondary" />,
    description: "Comprehensive medical services under one roof"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="bg-white/10 p-3 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl font-medium mb-2">{stat.label}</p>
              <p className="text-white/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;