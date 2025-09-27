import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Domain Verification',
    description: 'We verify your domain ownership and check DNS accessibility'
  },
  {
    number: '02',
    title: 'Zoho Account Setup',
    description: 'Create and configure your Zoho Mail account with optimal settings'
  },
  {
    number: '03',
    title: 'DNS Configuration',
    description: 'Set up MX records, SPF, DKIM, and DMARC for maximum deliverability'
  },
  {
    number: '04',
    title: 'Email Creation',
    description: 'Create professional email addresses and configure mail clients'
  },
  {
    number: '05',
    title: 'Testing & Handover',
    description: 'Thorough testing and complete handover with documentation'
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] mb-16">
          OUR PROCESS
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start gap-8 p-8 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}