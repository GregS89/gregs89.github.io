import { useState } from "react";
import { Helmet } from "react-helmet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { AppointmentFormData } from "@/types";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  department: z.string({ required_error: "Please select a department." }),
  doctor: z.string().optional(),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time slot." }),
  reason: z.string().optional(),
});

const availableTimes = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", 
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const AppointmentPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const { toast } = useToast();

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      date: undefined,
      time: "",
      reason: "",
    },
  });

  const filteredDoctors = selectedDepartment
    ? doctors.filter((doctor) => doctor.specialty === selectedDepartment)
    : doctors;

  const onSubmit = (data: AppointmentFormData) => {
    console.log("Form submitted:", data);
    
    // Show success message
    toast({
      title: "Appointment Scheduled!",
      description: `Your appointment has been scheduled for ${format(data.date!, "PPPP")} at ${data.time}.`,
      duration: 5000,
    });
    
    // Reset form
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Book an Appointment | Afya Hospital</title>
        <meta
          name="description"
          content="Book an appointment with our doctors at Afya Hospital. Easy online appointment scheduling for your healthcare needs."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Schedule your visit to Afya Hospital. Our team of medical professionals is ready to provide you with
            the care you need.
          </p>
        </div>
      </div>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Appointment Request Form</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+254 7XX XXX XXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Department/Specialty</FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                                setSelectedDepartment(value);
                                form.setValue("doctor", ""); // Reset doctor when department changes
                              }}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a department" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service.id} value={service.name}>
                                    {service.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="doctor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Doctor (Optional)</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                              disabled={!selectedDepartment}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a doctor" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {filteredDoctors.map((doctor) => (
                                  <SelectItem key={doctor.id} value={doctor.name}>
                                    {doctor.name} - {doctor.specialty}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Appointment Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => {
                                      // Disable past dates and weekends
                                      const now = new Date();
                                      now.setHours(0, 0, 0, 0);
                                      const day = date.getDay();
                                      return date < now || day === 0;
                                    }}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time slot" />
                                    <Clock className="ml-auto h-4 w-4 opacity-50" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {availableTimes.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reason for Visit (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide any details about your visit that might help us prepare"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" size="lg">
                        Schedule Appointment
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Appointment Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Opening Hours</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>8:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday</span>
                          <span>8:00 AM - 4:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed (Emergency Only)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Emergency Contact</h4>
                      <p className="text-primary font-bold">+254 700 111 222</p>
                      <p className="text-sm text-gray-600">Available 24/7</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Important Notes</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Please arrive 15 minutes before your scheduled appointment time.</li>
                        <li>Bring your ID and insurance information if applicable.</li>
                        <li>You will receive a confirmation SMS/email after booking.</li>
                        <li>If you need to cancel, please do so at least 24 hours before your appointment.</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Need Help?</h4>
                      <p className="text-sm text-blue-700 mb-2">
                        If you need assistance with booking your appointment, please call our patient support line:
                      </p>
                      <p className="font-bold">+254 712 345 678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;