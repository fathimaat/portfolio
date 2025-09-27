import React from 'react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[32px] md:text-[40px] leading-[79%] mb-8 md:mb-16">
          WHY PROFESSIONAL EMAIL MATTERS
        </h2>
        <div className="space-y-6 md:space-y-8 font-['Be_Vietnam'] font-normal text-[24px] md:text-[40px] leading-[120%] md:leading-[108%] max-w-4xl">
          <p>
            I help you stop using <span className="font-bold tracking-[-0.06em]">generic Gmail addresses</span> for your business. Professional email addresses like <span className="font-bold tracking-[-0.06em]">hello@yourdomain.com</span> build trust and credibility.
          </p>
          <p>
            I specialize in setting up <span className="font-bold tracking-[-0.06em]">custom domain email addresses</span> using <span className="font-bold tracking-[-0.06em]">Zoho Mail</span> - a professional, secure, and reliable email solution.
          </p>
          <p>
            Perfect for <span className="font-bold tracking-[-0.06em]">startups</span>, <span className="font-bold tracking-[-0.06em]">freelancers</span>, and <span className="font-bold tracking-[-0.06em]">small businesses</span> who want to make a professional impression from day one.
          </p>
        </div>
      </div>
    </section>
  );
}