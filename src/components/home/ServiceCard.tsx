
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  reversed?: boolean;
  ctaText?: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  icon,
  features,
  image,
  reversed = false,
  ctaText = "Learn More"
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      id={id}
      ref={cardRef}
      className={`animate-on-scroll py-16 md:py-24 scroll-mt-20`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-lg bg-vaultblue-100 flex items-center justify-center text-vaultblue-700 mr-3">
                {icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-vaultblue-900">{title}</h2>
            </div>
            
            <p className="text-lg text-vaultblue-700">{description}</p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    width="20" 
                    height="20" 
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
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                    />
                  </svg>
                  <span className="text-vaultblue-800">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="mt-6 bg-vaultblue-600 hover:bg-vaultblue-700 group">
              {ctaText}
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="glass p-3 rounded-xl shadow-lg">
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
