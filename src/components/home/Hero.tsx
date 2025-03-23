
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Lock, Calendar, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-vaultblue-50 to-white z-[-1]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-vaultblue-200/30 blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-vaultblue-100/40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className={`w-full lg:w-1/2 text-center lg:text-left space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-vaultblue-100/60 text-vaultblue-800 text-sm font-medium mb-2">
              <Shield size={14} className="mr-1" />
              Secure by design. Private by default.
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vaultblue-900 tracking-tight">
              Your Digital Life, <br />
              <span className="text-vaultblue-600">Secured</span> and <span className="text-vaultblue-600">Private</span>
            </h1>
            
            <p className="text-lg md:text-xl text-vaultblue-700 max-w-xl">
              VaultSpec provides state-of-the-art cybersecurity tools for managing your passwords, calendar, and emails with uncompromising privacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <Button size="lg" className="bg-vaultblue-600 hover:bg-vaultblue-700">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="bg-white hover:bg-vaultblue-50">
                How It Works
              </Button>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start text-vaultblue-700">
              <div className="flex items-center">
                <Lock size={16} className="mr-1.5" />
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center">
                <Shield size={16} className="mr-1.5" />
                <span>Zero-knowledge architecture</span>
              </div>
              <div className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-1.5">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Open-source</span>
              </div>
            </div>
          </div>

          {/* Hero image/illustration */}
          <div className={`w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-12'}`}>
            <div className="relative w-full max-w-xl mx-auto">
              {/* Main Dashboard Preview */}
              <div className="glass p-2 rounded-xl shadow-lg">
                <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                  <div className="h-8 bg-vaultblue-50 flex items-center px-4 border-b border-vaultblue-100">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="h-[260px] md:h-[320px] bg-vaultblue-50 rounded-lg flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="flex justify-center space-x-8 mb-6">
                          <ServiceIcon Icon={Lock} label="Password" />
                          <ServiceIcon Icon={Calendar} label="Calendar" />
                          <ServiceIcon Icon={Mail} label="Mail" />
                        </div>
                        <h3 className="text-lg font-medium text-vaultblue-900">VaultSpec Dashboard</h3>
                        <p className="text-vaultblue-600 mt-2">
                          All your secure services in one place
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-vaultblue-100 rounded-lg shadow-lg flex items-center justify-center rotate-12 animate-pulse-slow">
                <Lock size={30} className="text-vaultblue-700" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center -rotate-6 animate-pulse-slow">
                <Calendar size={36} className="text-vaultblue-600" />
              </div>
              
              <div className="absolute bottom-20 right-0 transform translate-x-1/4 w-16 h-16 bg-vaultblue-200 rounded-lg shadow-lg flex items-center justify-center rotate-12 animate-pulse-slow">
                <Mail size={24} className="text-vaultblue-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceIcon = ({ Icon, label }: { Icon: React.FC<{ size?: number }>; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
      <Icon size={24} className="text-vaultblue-600" />
    </div>
    <p className="mt-2 text-sm font-medium text-vaultblue-800">{label}</p>
  </div>
);

export default Hero;
