import React from 'react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/utils';

export function Benefits() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8 bg-gradient-to-r from-blue-400 to-cyan-400">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-[32px] md:text-[48px] leading-[110%] md:leading-[79%] font-bold mb-8">
            Why Choose Professional Email?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-4">Build Trust & Credibility</h3>
              <p className="text-white/90 text-lg">
                Professional email addresses make your business look established and trustworthy to clients and partners.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-4">Enhanced Security</h3>
              <p className="text-white/90 text-lg">
                Zoho Mail provides enterprise-grade security with advanced spam protection and encryption.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-4">Better Organization</h3>
              <p className="text-white/90 text-lg">
                Separate business and personal communications with dedicated professional email addresses.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl mb-8">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-white text-3xl font-bold mb-4">
                From Generic to Professional
              </h3>
              <div className="space-y-4 text-lg">
                <div className="bg-red-500/20 p-4 rounded-lg">
                  <span className="text-white/70 line-through">yourname@gmail.com</span>
                </div>
                <div className="text-white text-2xl">↓</div>
                <div className="bg-green-500/20 p-4 rounded-lg">
                  <span className="text-white font-bold">hello@yourdomain.com</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="text-lg px-8 py-4"
            >
              GET STARTED TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}