import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Wifi, Car, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const featured = [
    {
      id: "ocean-view-resort",
      title: "Ocean View Resort & Spa",
      category: "Resort",
      location: "Maldives",
      rating: 4.9,
      reviews: 324,
      price: "₹8500",
      originalPrice: "₹12,000",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600",
      features: ["Ocean View", "Spa Included", "All Inclusive", "Private Beach"],
      amenities: [Wifi, Car, Coffee],
      description: "Experience luxury at its finest with breathtaking ocean views, world-class spa treatments, and pristine private beaches."
    },
    {
      id: "mountain-adventure",
      title: "Alpine Adventure Experience",
      category: "Adventure",
      location: "Swiss Alps",
      rating: 4.8,
      reviews: 189,
      price: "₹4500",
      originalPrice: "₹6500",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600",
      features: ["Guided Tours", "Equipment Included", "Small Groups", "Professional Guide"],
      amenities: [Users, Car],
      description: "Embark on thrilling alpine adventures with professional guides through the majestic Swiss mountain ranges."
    },
    {
      id: "luxury-city-hotel",
      title: "Metropolitan Luxury Hotel",
      category: "Hotel",
      location: "New York City",
      rating: 4.7,
      reviews: 567,
      price: "₹3500",
      originalPrice: "₹4500",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      features: ["City Center", "Business Class", "24/7 Service", "Fine Dining"],
      amenities: [Wifi, Car, Coffee],
      description: "Sophisticated urban retreat in the heart of Manhattan with premium amenities and exceptional service."
    },
    {
      id: "wellness-spa-retreat",
      title: "Retreat Wellness",
      category: "Spa",
      location: "Ooty, Tamilnadu",
      rating: 4.9,
      reviews: 234,
      price: "₹2750",
      originalPrice: "₹3800",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600",
      features: ["Holistic Treatments", "Yoga Classes", "Meditation", "Organic Cuisine"],
      amenities: [Wifi, Coffee],
      description: "Rejuvenate your mind and body with ancient wellness practices in a serene tropical paradise."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Featured Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Handpicked Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected premium services offering exceptional value and unforgettable memories
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featured.map((service, index) => (
            <Card key={service.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                      {service.category}
                    </Badge>
                  </div>
                  {service.originalPrice && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive" className="bg-red-500/90 backdrop-blur-sm">
                        Save {Math.round((1 - parseInt(service.price.replace('$', '')) / parseInt(service.originalPrice.replace('$', ''))) * 100)}%
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{service.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">({service.reviews})</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Amenities */}
                    <div className="flex items-center space-x-3 mb-4">
                      {service.amenities.map((Amenity, idx) => (
                        <Amenity key={idx} className="h-4 w-4 text-muted-foreground" />
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{service.originalPrice}</span>
                      )}
                      <span className="text-sm text-muted-foreground">per night</span>
                    </div>
                    <Button asChild size="sm">
                      <Link to={`/service/${service.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services/hotels">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;