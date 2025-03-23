
import { Link } from "react-router-dom";
import Logo from "../home/LogoAnimation";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vaultblue-50 border-t border-vaultblue-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Logo size={32} animated={false} />
              <span className="text-xl font-bold text-vaultblue-900">VaultSpec</span>
            </Link>
            <p className="text-vaultblue-700 text-sm">
              Innovative cybersecurity solutions designed to protect both individuals and businesses from online threats.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="#" label="Facebook" />
              <SocialIcon Icon={Twitter} href="#" label="Twitter" />
              <SocialIcon Icon={Instagram} href="#" label="Instagram" />
              <SocialIcon Icon={Linkedin} href="#" label="LinkedIn" />
              <SocialIcon Icon={Github} href="#" label="GitHub" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-vaultblue-900 uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#password-manager">Password Manager</FooterLink>
              <FooterLink href="#calendar">Calendar</FooterLink>
              <FooterLink href="#mail">Mail</FooterLink>
              <FooterLink href="#vpn">VPN (Coming Soon)</FooterLink>
              <FooterLink href="#drive">Secure Drive (Coming Soon)</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-vaultblue-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-vaultblue-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
              <FooterLink href="/compliance">Compliance</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-vaultblue-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-vaultblue-600">
          <p>© {new Date().getFullYear()} VaultSpec. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with security and privacy in mind</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-vaultblue-600 hover:text-vaultblue-800 transition-colors"
    >
      {children}
    </a>
  </li>
);

const SocialIcon = ({ 
  Icon, 
  href, 
  label 
}: { 
  Icon: React.FC<{ size?: number }>;
  href: string;
  label: string;
}) => (
  <a 
    href={href} 
    aria-label={label}
    className="h-8 w-8 flex items-center justify-center rounded-full bg-white text-vaultblue-700 hover:bg-vaultblue-100 hover:text-vaultblue-900 transition-colors"
  >
    <Icon size={16} />
  </a>
);

export default Footer;
