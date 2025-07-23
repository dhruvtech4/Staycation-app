import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohith Reddy",
      location: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      service: "Ocean View Resort",
      review: "Absolutely incredible experience! The resort exceeded all our expectations. The staff was phenomenal, and the ocean view from our villa was breathtaking. Will definitely book with TravelLux again.",
      verified: true
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      service: "Alpine Adventure",
      review: "The Swiss Alps adventure was life-changing! Professional guides, top-notch equipment, and unforgettable views. The attention to detail and safety measures were impressive.",
      verified: true
    },
    {
      name: "Emily Rodriguez",
      location: "Madrid, Spain",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      service: "Wellness Retreat",
      review: "The Bali wellness retreat was exactly what I needed. Perfect blend of relaxation and rejuvenation. The spa treatments were divine and the yoga sessions were transformative.",
      verified: true
    },
    {
      name: "David Thompson",
      location: "Toronto, Canada",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      service: "Metropolitan Hotel",
      review: "Outstanding service from start to finish. The hotel's location was perfect, rooms were luxurious, and the concierge team went above and beyond to make our stay special.",
      verified: true
    },
    {
      name: "Lisa Wang",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      service: "Cleaning Service",
      review: "Their vacation rental cleaning service is impeccable. Professional, thorough, and reliable. Our property has never looked better, and our guests consistently leave 5-star reviews.",
      verified: true
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      service: "Resort Package",
      review: "Booked a last-minute resort package and was blown away by the value and quality. Customer service was responsive and helped us find the perfect deal within our budget.",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers who have chosen TravelLux for their luxury journeys
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  {testimonial.verified && (
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Service */}
                <div className="text-sm text-primary font-medium mb-4">
                  {testimonial.service}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-6 py-4 shadow-sm">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;