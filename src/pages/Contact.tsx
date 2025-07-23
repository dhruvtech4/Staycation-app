import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["7896321265", "9745632581"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@retreat.com", "support@retreat.com"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Vanasthalipuram", "Hyderabad, 500070"],
      description: "Visit our main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 8PM", "Sat-Sun: 10AM - 6PM"],
      description: "Indian Standard Time"
    }
  ];

  // const departments = [
  //   {
  //     title: "General Inquiries",
  //     icon: MessageCircle,
  //     email: "info@travellux.com",
  //     description: "Questions about our services and bookings"
  //   },
  //   {
  //     title: "Customer Support",
  //     icon: Headphones,
  //     email: "support@travellux.com",
  //     description: "Help with existing bookings and issues"
  //   },
  //   {
  //     title: "Business Partnerships",
  //     icon: Phone,
  //     email: "partners@travellux.com",
  //     description: "Collaboration and business opportunities"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Have a question or ready to start planning your next adventure? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => handleInputChange("subject", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Booking Assistance</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnership">Business Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Quick Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                          <p className="text-xs text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Departments */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Departments
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => {
                    const Icon = dept.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">
                            {dept.title}
                          </h4>
                          <p className="text-xs text-primary">{dept.email}</p>
                          <p className="text-xs text-muted-foreground">
                            {dept.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card> */}
            
            {/* Emergency Contact */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  24/7 Emergency Support
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For urgent travel assistance or emergencies
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium">7965412326-HELP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium">emergency@retreat.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Visit Our Office
            </h3>
            <div className="bg-muted rounded-lg p-12 text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">Interactive map would be displayed here</p>
              <p className="text-sm text-muted-foreground">
                Vanasthalipuram, Hyderabad, 500070
              </p>
              <Button variant="outline" className="mt-4">
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;