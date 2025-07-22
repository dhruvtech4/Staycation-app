import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Star, Headphones, Globe, Award } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your bookings are protected with our secure payment system and comprehensive travel insurance options."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service ensures assistance whenever you need it, anywhere in the world."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Hand-picked luxury accommodations and services that meet our highest standards of excellence."
    },
    {
      icon: Headphones,
      title: "Personal Concierge",
      description: "Dedicated travel specialists to customize your experience and handle every detail of your journey."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to exclusive properties and experiences in over 150 destinations worldwide."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized by industry leaders for outstanding service and customer satisfaction."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose TravelLux?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional travel experiences with unmatched service and attention to detail
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">500K+</div>
              <div className="text-primary-foreground/80 text-sm">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">150+</div>
              <div className="text-primary-foreground/80 text-sm">Destinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">4.9/5</div>
              <div className="text-primary-foreground/80 text-sm">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;