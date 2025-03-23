
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-vaultblue-50 text-vaultblue-700 border-vaultblue-200">
                About Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-vaultblue-900 mb-6">
                Protecting Your Digital Life
              </h1>
              <p className="text-lg text-vaultblue-700 max-w-2xl mx-auto">
                At VaultSpec, we're dedicated to building innovative cybersecurity solutions that 
                protect individuals and businesses from modern digital threats.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-vaultblue-700 mb-12">
              <p>
                In today's increasingly interconnected world, your digital security has never been more important. 
                VaultSpec was founded with a simple but powerful mission: to make enterprise-grade security accessible 
                to everyone, without sacrificing usability or privacy.
              </p>
              
              <p>
                We believe privacy is a fundamental right, not a premium feature. That's why we're building a suite 
                of tools that prioritize security while maintaining an intuitive, user-friendly experience.
              </p>
              
              <p>
                Our team brings together expertise in cybersecurity, encryption, user experience design, and 
                software development to create solutions that are both powerful and simple to use.
              </p>
              
              <h2 className="text-2xl font-bold text-vaultblue-900 mt-8 mb-4">Our Values</h2>
              
              <ul>
                <li><strong>Privacy First:</strong> We never compromise on your privacy. Your data belongs to you.</li>
                <li><strong>Transparency:</strong> We're open about how our products work and how we handle your information.</li>
                <li><strong>Security:</strong> We implement the latest security standards and best practices.</li>
                <li><strong>Accessibility:</strong> We believe everyone deserves access to high-quality security tools.</li>
                <li><strong>Innovation:</strong> We continuously work to improve and evolve our products.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-vaultblue-900 mb-6">Meet Our Founder</h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-40 h-40 rounded-full bg-vaultblue-100 flex items-center justify-center text-vaultblue-500 text-4xl font-bold">
                  MVS
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-vaultblue-900 mb-2">M V S Dhruvesh</h3>
                  <p className="text-vaultblue-700 mb-4">
                    Dhruvesh is a cybersecurity enthusiast and entrepreneur with a passion for creating 
                    technology that enhances digital privacy and security. With a background in computer science 
                    and information security, he founded VaultSpec to address the growing need for user-friendly 
                    security tools that don't compromise on protection.
                  </p>
                  
                  <p className="text-vaultblue-700 mb-6">
                    "In a world where our digital lives are increasingly valuable and vulnerable, everyone deserves 
                    robust protection without needing a degree in computer science to use it. That's the gap 
                    VaultSpec aims to fill."
                  </p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/dhruvesh3466" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-vaultblue-600 hover:text-vaultblue-800 transition-colors"
                    >
                      <Instagram size={18} /> <span>dhruvesh3466</span>
                    </a>
                    <a 
                      href="https://twitter.com/dhruvesh_17" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-vaultblue-600 hover:text-vaultblue-800 transition-colors"
                    >
                      <Twitter size={18} /> <span>dhruvesh_17</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/mvs-dhruvesh-370416172/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-vaultblue-600 hover:text-vaultblue-800 transition-colors"
                    >
                      <Linkedin size={18} /> <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-vaultblue-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-vaultblue-700 mb-8">
                Have questions about our products or interested in partnering with us? 
                We'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-vaultblue-600 text-white py-3 px-6 rounded-lg hover:bg-vaultblue-700 transition-colors"
                >
                  <Mail size={18} /> Contact Us
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-vaultblue-200 text-vaultblue-800 py-3 px-6 rounded-lg hover:bg-vaultblue-50 transition-colors"
                >
                  <Phone size={18} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
