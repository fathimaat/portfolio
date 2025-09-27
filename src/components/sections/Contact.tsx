import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { FORMSPREE_ENDPOINT, SITE_CONFIG } from '../../lib/constants';
import type { ContactFormData } from '../../types';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('Submitting...');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Professional Domain Email Setup',
          subject: 'New Domain Email Setup Request'
        }),
      });

      if (response.ok) {
        setSubmissionStatus('Thank you! We will get back to you within 24 hours with a custom solution for your domain email setup.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      setSubmissionStatus('Error: ' + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] mb-8">
          GET STARTED
        </h2>
        <p className="font-['Be_Vietnam'] font-normal text-[40px] leading-[109%] mb-16">
          Ready to upgrade your business communication?
          <br />
          Let's set up your <span className="font-bold">professional domain email</span> today
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Current Email"
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <input
            type="text"
            name="domain"
            placeholder="Your Domain (e.g., yourbusiness.com)"
            className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your email needs (number of email addresses, team size, etc.)"
            rows={6}
            required
            className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a 
                href={`mailto:${SITE_CONFIG.author.email}`}
                aria-label="Send email"
                className="hover:text-cyan-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href={SITE_CONFIG.author.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-cyan-400 transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              className="bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500"
            >
              {isSubmitting ? 'Sending...' : 'GET QUOTE'}
            </Button>
          </div>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-lg" role="status">
            {submissionStatus}
          </p>
        )}
      </div>
    </section>
  );
}