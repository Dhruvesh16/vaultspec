
import { useRef, useEffect } from 'react';
import { Lock, Shield, Key, RefreshCw, Server, Users, Zap, Globe } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={featuresRef}
      className="py-16 md:py-24 bg-vaultblue-50 animate-on-scroll"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vaultblue-900 mb-4">
            Enterprise-Grade Security, Consumer-Friendly Design
          </h2>
          <p className="text-lg text-vaultblue-700">
            VaultSpec combines cutting-edge security with intuitive user experience, making advanced 
            cybersecurity accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <FeatureCard 
            icon={<Shield size={24} />}
            title="End-to-End Encryption"
            description="Your data is encrypted on your device before it reaches our servers, meaning only you can access your information."
          />
          <FeatureCard 
            icon={<Key size={24} />}
            title="Zero-Knowledge Architecture"
            description="We can't read your data even if we wanted to. Your encryption keys never leave your device."
          />
          <FeatureCard 
            icon={<RefreshCw size={24} />}
            title="Seamless Sync"
            description="Access your secure data across all your devices with real-time synchronization."
          />
          <FeatureCard 
            icon={<Server size={24} />}
            title="Open Source"
            description="Our code is transparent and peer-reviewed, ensuring there are no hidden backdoors."
          />
          <FeatureCard 
            icon={<Users size={24} />}
            title="Secure Sharing"
            description="Share passwords and calendar events securely with family, friends, or colleagues."
          />
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Lightning Fast"
            description="Optimized performance ensures protection doesn't come at the cost of speed."
          />
          <FeatureCard 
            icon={<Lock size={24} />}
            title="Breach Alerts"
            description="Receive instant notifications if your accounts are compromised in a data breach."
          />
          <FeatureCard 
            icon={<Globe size={24} />}
            title="Cross-Platform"
            description="Available on Windows, macOS, Linux, iOS, and Android with a consistent experience."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="glass group p-6 rounded-xl transition-all-300 hover:shadow-lg hover:translate-y-[-5px]">
    <div className="w-12 h-12 rounded-lg bg-vaultblue-100 flex items-center justify-center text-vaultblue-700 mb-4 group-hover:bg-vaultblue-600 group-hover:text-white transition-all-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-vaultblue-900 mb-2">{title}</h3>
    <p className="text-vaultblue-700">{description}</p>
  </div>
);

export default Features;
