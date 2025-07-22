import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, Waves, Mountain, Sparkles, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCategories = () => {
  const categories = [
    {
      icon: Hotel,
      title: "Hotels",
      description: "Luxury accommodations with world-class amenities",
      href: "/services/hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500"
    },
    {
      icon: Waves,
      title: "Resorts",
      description: "Exotic beach and mountain resorts for the perfect getaway",
      href: "/services/resorts",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=500"
    },
    {
      icon: Mountain,
      title: "Adventures",
      description: "Thrilling outdoor experiences and guided tours",
      href: "/services/adventures",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=500"
    },
    {
      icon: Sparkles,
      title: "Spa",
      description: "Rejuvenating wellness and spa treatments",
      href: "/services/spa",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=500"
    },
    {
      icon: Home,
      title: "Cleaning",
      description: "Professional cleaning services for vacation rentals",
      href: "/services/cleaning",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of travel and hospitality services designed to create unforgettable experiences
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {category.description}
                  </p>
                  <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                    <Link to={category.href} className="flex items-center text-primary hover:text-primary/80">
                      Explore {category.title}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;