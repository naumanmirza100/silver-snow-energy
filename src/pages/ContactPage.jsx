import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>SNOW ENERGY - Contact Us</title>
        <meta name="description" content="Contact Silver Snow Energy™ for B2B inquiries, wholesale, retail, and partnership opportunities. Your next bestseller starts here!" />
      </Helmet>
      <div className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 animate-background-pan" style={{ backgroundSize: '200% 200%' }}></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;