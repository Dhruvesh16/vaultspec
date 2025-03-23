
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../home/LogoAnimation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
        isScrolled ? "py-2 glass shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo size={isScrolled ? 30 : 36} animated={!isScrolled} />
            <span className={`text-xl font-bold transition-all-300 ${
              isScrolled ? "text-vaultblue-900" : "text-vaultblue-800"
            }`}>
              VaultSpec
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLinks isScrolled={isScrolled} />

            <div className="ml-6 flex items-center space-x-3">
              <Button 
                variant="outline"
                className={`transition-all-300 ${
                  isScrolled 
                    ? "bg-white/80 text-vaultblue-800" 
                    : "bg-white/20 text-vaultblue-700 hover:bg-white/40"
                }`}
              >
                Log In
              </Button>
              <Button 
                className={`transition-all-300 ${
                  isScrolled 
                    ? "bg-vaultblue-600" 
                    : "bg-vaultblue-700"
                }`}
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-vaultblue-800" />
            ) : (
              <Menu className="h-6 w-6 text-vaultblue-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="glass absolute top-full left-0 right-0 px-4 py-5 border-t border-white/20 md:hidden animate-slide-down">
          <div className="flex flex-col space-y-4">
            <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
              <Button variant="outline" className="w-full justify-center">
                Log In
              </Button>
              <Button className="w-full justify-center">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const navLinkClass = `px-3 py-2 rounded-md text-sm font-medium transition-all-200 ${
    isScrolled 
      ? "text-vaultblue-900 hover:bg-vaultblue-50" 
      : "text-vaultblue-700 hover:text-vaultblue-900 hover:bg-white/20"
  }`;

  return (
    <>
      <NavLink href="#features" className={navLinkClass}>Features</NavLink>
      <NavLink href="#password-manager" className={navLinkClass}>Password Manager</NavLink>
      <NavLink href="#calendar" className={navLinkClass}>Calendar</NavLink>
      <NavLink href="#mail" className={navLinkClass}>Mail</NavLink>
      <NavLink href="#pricing" className={navLinkClass}>Pricing</NavLink>
      <Link to="/about" className={navLinkClass}>About Us</Link>
    </>
  );
};

const MobileNavLinks = ({ setIsMenuOpen }: { setIsMenuOpen: (value: boolean) => void }) => {
  const navLinkClass = `px-3 py-2 rounded-md text-base font-medium text-vaultblue-900 hover:bg-vaultblue-50 transition-colors`;

  return (
    <>
      <MobileNavLink href="#features" className={navLinkClass} setIsMenuOpen={setIsMenuOpen}>
        Features
      </MobileNavLink>
      <MobileNavLink href="#password-manager" className={navLinkClass} setIsMenuOpen={setIsMenuOpen}>
        Password Manager
      </MobileNavLink>
      <MobileNavLink href="#calendar" className={navLinkClass} setIsMenuOpen={setIsMenuOpen}>
        Calendar
      </MobileNavLink>
      <MobileNavLink href="#mail" className={navLinkClass} setIsMenuOpen={setIsMenuOpen}>
        Mail
      </MobileNavLink>
      <MobileNavLink href="#pricing" className={navLinkClass} setIsMenuOpen={setIsMenuOpen}>
        Pricing
      </MobileNavLink>
      <Link 
        to="/about" 
        className={navLinkClass}
        onClick={() => setIsMenuOpen(false)}
      >
        About Us
      </Link>
    </>
  );
};

const NavLink = ({ href, className, children }: { href: string; className: string; children: React.ReactNode }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  className, 
  setIsMenuOpen, 
  children 
}: { 
  href: string; 
  className: string; 
  setIsMenuOpen: (value: boolean) => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className={className}
    onClick={() => setIsMenuOpen(false)}
  >
    {children}
  </a>
);

export default Navbar;
