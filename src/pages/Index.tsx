
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ServiceCard from "../components/home/ServiceCard";
import { Lock, Calendar, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Animate on scroll implementation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Password Manager Section */}
        <ServiceCard
          id="password-manager"
          title={
            <div className="flex items-center gap-2">
              Password Manager
              <Badge variant="outline" className="ml-2 bg-amber-50 text-amber-700 border-amber-200">
                Coming Soon
              </Badge>
            </div>
          }
          description="Store, generate, and auto-fill strong, unique passwords for all your accounts with military-grade encryption."
          icon={<Lock size={20} />}
          features={[
            "Generate complex passwords with a single click",
            "Autofill credentials on websites and apps",
            "Store secure notes, credit cards, and personal info",
            "Identify weak or reused passwords",
            "Get alerts when your accounts are compromised"
          ]}
          image="/images/placeholder.svg"
          ctaText="Explore Password Manager"
        />
        
        {/* Calendar Section */}
        <ServiceCard
          id="calendar"
          title={
            <div className="flex items-center gap-2">
              Secure Calendar
              <Badge variant="outline" className="ml-2 bg-amber-50 text-amber-700 border-amber-200">
                Coming Soon
              </Badge>
            </div>
          }
          description="Plan your schedule with confidence, knowing your appointments and events are private and protected."
          icon={<Calendar size={20} />}
          features={[
            "End-to-end encrypted events and scheduling",
            "Share calendar events securely with others",
            "Set encrypted reminders and notifications",
            "Integrates with your existing calendars",
            "Access across all your devices"
          ]}
          image="/images/placeholder.svg"
          reversed={true}
          ctaText="Discover Secure Calendar"
        />
        
        {/* Mail Section */}
        <ServiceCard
          id="mail"
          title={
            <div className="flex items-center gap-2">
              Private Mail
              <Badge variant="outline" className="ml-2 bg-amber-50 text-amber-700 border-amber-200">
                Coming Soon
              </Badge>
            </div>
          }
          description="Send and receive emails with confidence, knowing your communications are shielded from prying eyes."
          icon={<Mail size={20} />}
          features={[
            "End-to-end encrypted emails",
            "Zero-access encryption for inbox contents",
            "No tracking pixels or ad targeting",
            "Custom domains and aliases for enhanced privacy",
            "Advanced spam and phishing protection"
          ]}
          image="/images/placeholder.svg"
          ctaText="Learn About Private Mail"
        />
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-vaultblue-50 animate-on-scroll scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-vaultblue-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-vaultblue-700">
                Choose the plan that fits your needs. All plans include our core security features.
              </p>
              <Badge variant="outline" className="mt-4 px-3 py-1 bg-amber-50 text-amber-700 border-amber-200">
                Coming Soon
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="glass rounded-xl p-6 transition-all-300 hover:shadow-lg hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold text-vaultblue-900 mb-2">Free</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold text-vaultblue-800">$0</span>
                  <span className="text-vaultblue-600 ml-1">/month</span>
                </div>
                <p className="text-vaultblue-700 mb-6">Basic protection for individual users</p>
                <ul className="space-y-3 mb-8">
                  <PricingFeature text="Password Manager (up to 50 items)" />
                  <PricingFeature text="Basic Calendar" />
                  <PricingFeature text="Email (1GB storage)" />
                  <PricingFeature text="1 device" />
                  <PricingFeature text="Community support" />
                </ul>
                <button className="w-full py-2 px-4 bg-vaultblue-100 text-vaultblue-800 rounded-lg hover:bg-vaultblue-200 transition-colors font-medium">
                  Get Started
                </button>
              </div>
              
              {/* Premium Plan */}
              <div className="glass rounded-xl p-6 border-2 border-vaultblue-500 shadow-lg relative transition-all-300 hover:translate-y-[-5px]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-vaultblue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-vaultblue-900 mb-2">Premium</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold text-vaultblue-800">$4.99</span>
                  <span className="text-vaultblue-600 ml-1">/month</span>
                </div>
                <p className="text-vaultblue-700 mb-6">Advanced protection for individuals</p>
                <ul className="space-y-3 mb-8">
                  <PricingFeature text="Unlimited password storage" />
                  <PricingFeature text="Advanced Calendar features" />
                  <PricingFeature text="Email (15GB storage)" />
                  <PricingFeature text="Up to 5 devices" />
                  <PricingFeature text="Priority support" />
                  <PricingFeature text="Security alerts" />
                </ul>
                <button className="w-full py-2 px-4 bg-vaultblue-600 text-white rounded-lg hover:bg-vaultblue-700 transition-colors font-medium">
                  Get Premium
                </button>
              </div>
              
              {/* Business Plan */}
              <div className="glass rounded-xl p-6 transition-all-300 hover:shadow-lg hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold text-vaultblue-900 mb-2">Business</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold text-vaultblue-800">$8.99</span>
                  <span className="text-vaultblue-600 ml-1">/user/month</span>
                </div>
                <p className="text-vaultblue-700 mb-6">Enterprise-grade security for teams</p>
                <ul className="space-y-3 mb-8">
                  <PricingFeature text="Everything in Premium" />
                  <PricingFeature text="Team password sharing" />
                  <PricingFeature text="Admin console" />
                  <PricingFeature text="Email (100GB storage/user)" />
                  <PricingFeature text="Unlimited devices" />
                  <PricingFeature text="24/7 support" />
                  <PricingFeature text="Custom security policies" />
                </ul>
                <button className="w-full py-2 px-4 bg-vaultblue-100 text-vaultblue-800 rounded-lg hover:bg-vaultblue-200 transition-colors font-medium">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const PricingFeature = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      className="mr-2 text-vaultblue-600 mt-1"
    >
      <path 
        d="M7.5 12L10.5 15L16.5 9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
    <span className="text-vaultblue-800 text-sm">{text}</span>
  </li>
);

export default Index;
