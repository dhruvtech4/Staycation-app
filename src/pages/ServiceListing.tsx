import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Filter, Grid, List, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServiceListing = () => {
  const { category = "hotels" } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  // Mock data for different categories
  const services = [
    {
      id: "luxury-resort-maldives",
      title: "Paradise Resort Maldives",
      category: "resorts",
      location: "Maldives",
      rating: 4.9,
      reviews: 324,
      price: 850,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600",
      features: ["Ocean View", "All Inclusive", "Private Beach", "Spa"],
      description: "Luxurious overwater villas with stunning ocean views"
    },
    {
      id: "mountain-hotel-swiss",
      title: "Alpine Grand Hotel",
      category: "hotels",
      location: "Swiss Alps",
      rating: 4.8,
      reviews: 189,
      price: 450,
      originalPrice: 600,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      features: ["Mountain View", "Ski Access", "Fine Dining", "Fitness"],
      description: "Elegant mountain retreat with world-class amenities"
    },
    {
      id: "city-hotel-nyc",
      title: "Metropolitan Luxury Hotel",
      category: "hotels",
      location: "New York City",
      rating: 4.7,
      reviews: 567,
      price: 320,
      originalPrice: 450,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      features: ["City Center", "Business Class", "24/7 Service", "Rooftop Bar"],
      description: "Sophisticated urban hotel in the heart of Manhattan"
    },
    {
      id: "adventure-safari",
      title: "African Safari Adventure",
      category: "adventures",
      location: "Kenya",
      rating: 4.9,
      reviews: 234,
      price: 275,
      originalPrice: 380,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600",
      features: ["Wildlife Tours", "Professional Guide", "All Meals", "4x4 Vehicle"],
      description: "Unforgettable wildlife experience in the African savanna"
    },
    {
      id: "spa-retreat-bali",
      title: "Tranquil Wellness Retreat",
      category: "spa",
      location: "Bali, Indonesia",
      rating: 4.9,
      reviews: 234,
      price: 275,
      originalPrice: 380,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600",
      features: ["Holistic Treatments", "Yoga Classes", "Meditation", "Organic Cuisine"],
      description: "Rejuvenate your mind and body in tropical paradise"
    },
    {
      id: "cleaning-premium",
      title: "Premium Cleaning Service",
      category: "cleaning",
      location: "Miami, FL",
      rating: 4.8,
      reviews: 456,
      price: 150,
      originalPrice: 200,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
      features: ["Deep Cleaning", "Eco-Friendly", "Same Day", "Insured"],
      description: "Professional cleaning for vacation rentals and homes"
    }
  ];

  const filteredServices = services.filter(service => 
    service.category === category &&
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryTitles = {
    hotels: "Luxury Hotels",
    resorts: "Premium Resorts", 
    adventures: "Adventure Tours",
    spa: "Spa & Wellness",
    cleaning: "Cleaning Services"
  };

  const amenities = ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Bar", "Parking", "Pet Friendly"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {categoryTitles[category as keyof typeof categoryTitles]}
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover premium {category} with exceptional service and unforgettable experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </h3>
                
                {/* Search */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                      <Input
                        placeholder="Search services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-200">$0 - $200</SelectItem>
                        <SelectItem value="200-500">$200 - $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1000</SelectItem>
                        <SelectItem value="1000+">$1000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4.0">4.0+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Amenities */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Amenities</label>
                    <div className="space-y-2">
                      {amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox
                            id={amenity}
                            checked={selectedAmenities.includes(amenity)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedAmenities([...selectedAmenities, amenity]);
                              } else {
                                setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
                              }
                            }}
                          />
                          <label htmlFor={amenity} className="text-sm">
                            {amenity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-muted-foreground">
                {filteredServices.length} {category} found
              </div>
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Services Grid/List */}
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-6"
            }>
              {filteredServices.map((service) => (
                <Card key={service.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className={viewMode === "list" ? "flex" : ""}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${
                      viewMode === "list" ? "w-1/3 aspect-[4/3]" : "aspect-[4/3]"
                    }`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {service.originalPrice && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="destructive">
                            Save {Math.round((1 - service.price / service.originalPrice) * 100)}%
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <CardContent className={`p-6 ${viewMode === "list" ? "w-2/3 flex flex-col justify-between" : ""}`}>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        
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
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">${service.price}</span>
                          {service.originalPrice && (
                            <span className="text-lg text-muted-foreground line-through">
                              ${service.originalPrice}
                            </span>
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

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceListing;