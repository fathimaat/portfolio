import React from 'react';
import { Logo } from '../ui/Logo';
import { Mail, MessageCircle, Shield } from 'lucide-react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '../../lib/constants';
import { scrollToSection } from '../../lib/utils';

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      scrollToSection(href);
    }
  };

  return (
    <footer className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-3xl mb-8">Domain Email Setup Service</p>
          <Logo />
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 text-lg">
          <div>
            <h3 className="font-['Be_Vietnam'] font-semibold text-[14px] leading-[79%] tracking-[0.165em] text-neutral-500 mb-8">
              NAVIGATION
            </h3>
            <ul className="space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    onClick={handleClick}
                    className="font-['Be_Vietnam'] font-semibold text-[24px] leading-[100%] tracking-[-0.09em] hover:text-neutral-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Be_Vietnam'] font-semibold text-[14px] leading-[79%] tracking-[0.165em] text-neutral-500 mb-8">
              SERVICES
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>Domain Email Setup</li>
              <li>Zoho Mail Configuration</li>
              <li>DNS & MX Records</li>
              <li>Team Email Management</li>
              <li>Email Security Setup</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Be_Vietnam'] font-semibold text-[14px] leading-[79%] tracking-[0.165em] text-neutral-500 mb-8">
              CONTACT US
            </h3>
            <div className="flex gap-6 mb-6">
              <a 
                href={`mailto:${SITE_CONFIG.author.email}`} 
                className="hover:text-neutral-400"
                aria-label="Send email"
              >
                <Mail size={24} />
              </a>
              <a 
                href={SITE_CONFIG.author.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-neutral-400"
                aria-label="LinkedIn profile"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield size={16} />
              <span>Secure & Professional Setup</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Razin Rayees. Professional domain email setup service.</p>
        </div>
      </div>
    </footer>
  );
}