import React from 'react';
import { Mail, Shield, Settings, Users } from 'lucide-react';

const services = [
  {
    icon: Mail,
    title: 'Custom Domain Email Setup',
    description: 'Get professional email addresses like hello@yourdomain.com, info@yourdomain.com, and team@yourdomain.com'
  },
  {
    icon: Shield,
    title: 'Zoho Mail Configuration',
    description: 'Complete setup and configuration of Zoho Mail with advanced security features and spam protection'
  },
  {
    icon: Settings,
    title: 'DNS & MX Records',
    description: 'Proper DNS configuration and MX record setup to ensure reliable email delivery and reception'
  },
  {
    icon: Users,
    title: 'Team Email Management',
    description: 'Set up multiple email addresses for your team members with proper organization and access controls'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] mb-16">
          OUR SERVICES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <service.icon size={48} className="mb-6 text-cyan-400" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}