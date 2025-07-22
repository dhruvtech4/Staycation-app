import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate subscription
    setIsSubscribed(true);
    setEmail("");
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest travel deals and updates.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Mail className="h-8 w-8 text-primary-foreground" />
        </div>

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Stay Updated with Exclusive Deals
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Be the first to know about luxury travel packages, special discounts, and insider tips from our travel experts.
        </p>

        {/* Subscription Form */}
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/70 focus:bg-white/20"
                required
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-medium"
              >
                Subscribe
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 text-primary-foreground">
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-medium">Thank you for subscribing!</span>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-foreground/80">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
            <span className="text-sm">Exclusive travel deals</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
            <span className="text-sm">Early access to packages</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
            <span className="text-sm">Travel tips & guides</span>
          </div>
        </div>

        {/* Privacy Note */}
        <p className="mt-6 text-sm text-primary-foreground/70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;