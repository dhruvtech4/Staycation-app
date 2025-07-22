import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Calendar, Users, Wifi, Car, Coffee, Phone, Mail, Share, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock service data
  const service = {
    id: "ocean-view-resort",
    title: "Ocean View Resort & Spa",
    category: "Resort",
    location: "Maldives",
    rating: 4.9,
    reviews: 324,
    price: 850,
    originalPrice: 1200,
    description: "Experience luxury at its finest with breathtaking ocean views, world-class spa treatments, and pristine private beaches. Our overwater villas offer the perfect blend of comfort and elegance, making this the ideal destination for your dream vacation.",
    longDescription: "Nestled in the heart of the Indian Ocean, our resort offers an unparalleled luxury experience. Each overwater villa features floor-to-ceiling windows, private decks with direct ocean access, and world-class amenities. Indulge in our award-winning spa, savor gourmet cuisine at our restaurants, and explore the vibrant marine life through guided snorkeling and diving expeditions.",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Overwater Villas",
      "Private Beach Access",
      "World-Class Spa",
      "Multiple Restaurants",
      "Diving Center",
      "Fitness Center",
      "Kids Club",
      "Butler Service"
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Car, name: "Airport Transfer" },
      { icon: Coffee, name: "Restaurant" },
      { icon: Users, name: "Concierge" }
    ],
    included: [
      "Daily breakfast",
      "Airport transfers",
      "WiFi access",
      "Welcome drink",
      "Daily housekeeping",
      "Use of non-motorized water sports"
    ],
    highlights: [
      "98% of guests rate this property 4 or 5 stars",
      "Located on a private island",
      "Award-winning spa with traditional treatments",
      "Multiple dining options including underwater restaurant",
      "Direct access to coral reef for snorkeling"
    ]
  };

  const reviews = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&q=80&w=60",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely magical experience! The overwater villa was stunning and the service was impeccable. The spa treatments were incredible and the food was outstanding. Will definitely return!",
      helpful: 12
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60",
      rating: 5,
      date: "3 weeks ago",
      review: "Perfect honeymoon destination. The staff went above and beyond to make our stay special. The sunset views from our villa were breathtaking. Highly recommend the underwater restaurant!",
      helpful: 8
    },
    {
      name: "Emily Rodriguez",
      location: "Madrid, Spain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=60",
      rating: 5,
      date: "1 month ago",
      review: "Exceeded all expectations. The diving excursions were amazing, and the coral reef right outside our villa was spectacular. The kids club kept our children entertained while we relaxed at the spa.",
      helpful: 15
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={service.images[selectedImage]}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <Badge className="mb-2 bg-primary/90">{service.category}</Badge>
          <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{service.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>{service.rating}</span>
              <span>({service.reviews} reviews)</span>
            </div>
          </div>
        </div>
        <div className="absolute top-6 right-6 flex space-x-2">
          <Button variant="secondary" size="sm">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="secondary" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="grid grid-cols-4 gap-2">
                {service.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About this property</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.longDescription}
                  </p>
                  
                  <h4 className="font-semibold mb-3">What's included</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {service.included.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="amenities" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="location" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map would be displayed here</p>
                    <p className="text-sm text-muted-foreground mt-2">{service.location}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Guest Reviews</h3>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-semibold">{service.rating}</span>
                      <span className="text-muted-foreground">({service.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold">{review.name}</h4>
                                  <p className="text-sm text-muted-foreground">{review.location}</p>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center space-x-1 mb-1">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                  <p className="text-sm text-muted-foreground">{review.date}</p>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-3">{review.review}</p>
                              <p className="text-sm text-muted-foreground">
                                {review.helpful} people found this helpful
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="p-6">
                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-primary">${service.price}</span>
                    {service.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${service.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">per night</p>
                  {service.originalPrice && (
                    <Badge variant="destructive" className="mt-2">
                      Save {Math.round((1 - service.price / service.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                <Separator className="mb-6" />

                {/* Booking Form */}
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Check-in</label>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Select date
                      </Button>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Check-out</label>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Select date
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Guests</label>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      2 guests
                    </Button>
                  </div>
                </div>

                <Button className="w-full mb-4" size="lg">
                  Book Now
                </Button>

                <p className="text-xs text-muted-foreground text-center mb-4">
                  Free cancellation up to 24 hours before check-in
                </p>

                <Separator className="mb-4" />

                {/* Contact */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Need help?</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call us
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Send message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;