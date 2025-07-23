import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Heart, CheckCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Jagath Reddy Vemula",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&q=80&w=300",
      bio: "15+ years in luxury hospitality, passionate about creating unforgettable experiences."
    },
    {
      name: "Hanuman Reddy",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: "Expert in travel logistics with a focus on seamless customer journeys."
    },
    {
      name: "Sarah Johnson",
      role: "Customer Experience Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
      bio: "Dedicated to ensuring every guest receives world-class service and support."
    },
    {
      name: "Rohith Reddy",
      role: "Travel Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: "Curates unique adventures and experiences across the globe."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about travel and creating memories that last a lifetime."
    },
    {
      icon: CheckCircle,
      title: "Excellence",
      description: "We maintain the highest standards in every service we provide."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Every guest receives personalized attention and customized experiences."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our network spans the world, bringing you the best destinations and services."
    }
  ];

  const milestones = [
    { year: "2025", title: "Company Founded", description: "Started with a vision to redefine luxury travel" },
    // { year: "2012", title: "Global Expansion", description: "Expanded services to 50+ destinations worldwide" },
    // { year: "2018", title: "Award Recognition", description: "Received 'Best Luxury Travel Service' award" },
    // { year: "2023", title: "500K+ Travelers", description: "Celebrated serving over half a million happy travelers" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            About Retreat
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Crafting Dreams Into
            <span className="block">Unforgettable Journeys</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            For over 15 years, we've been dedicated to creating extraordinary travel experiences 
            that exceed expectations and create lasting memories.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Retreat began with a simple belief: that travel should be more than just a destination—
                  it should be a transformative experience that enriches your life and creates memories 
                  that last forever.
                </p>
                <p>
                  Founded in 2025 by Jagath Reddy Vemula, a hospitality veteran with a passion for excellence, 
                  Retreat started as a boutique travel service focusing on luxury accommodations and 
                  personalized experiences. What began as a small team of dedicated travel enthusiasts 
                  has grown into a global network of experts committed to delivering exceptional service.
                </p>
                <p>
                  Today, we proudly serve travelers from around the world, offering everything from 
                  luxury hotel bookings and exotic resort getaways to thrilling adventures and 
                  rejuvenating spa experiences. Our commitment to quality and attention to detail 
                  has earned us the trust of over 500,000 satisfied travelers.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=600"
                alt="Luxury travel experience"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8 text-yellow-400 fill-current" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional travel and hospitality services that exceed expectations, 
                  create lasting memories, and inspire people to explore the world with confidence 
                  and comfort.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's most trusted luxury travel service, known for our 
                  personalized approach, exceptional quality, and commitment to creating 
                  extraordinary experiences for every traveler.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind your extraordinary travel experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our growth and evolution
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline">{milestone.year}</Badge>
                    <h3 className="text-xl font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;