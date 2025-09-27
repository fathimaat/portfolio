import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Thank you for your message! I will get back to you soon.');
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
          CONTACT
        </h2>
        <p className="font-['Be_Vietnam'] font-normal text-[40px] leading-[109%] mb-16">
          Interested in working together?
          <br />
          Let's connect via <span className="font-bold">email</span> or <span className="font-bold">LinkedIn</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={6}
            required
            className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a 
                href={SITE_CONFIG.author.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.author.email}`}
                aria-label="Send email"
              >
                <Mail size={24} />
              </a>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              className="bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500"
            >
              {isSubmitting ? 'Sending...' : 'SEND'}
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