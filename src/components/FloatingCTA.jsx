import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const WhatsAppIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.75 13.96c.25.13.43.2.5.28.08.08.16.18.22.3.07.1.1.22.15.35.04.12.04.26.02.4s-.07.28-.15.4c-.08.13-.2.25-.35.36-.15.12-.32.2-.5.26-.18.06-.37.08-.57.08-.22,0-.44-.03-.65-.08-.2-.06-.4-.13-.58-.22-.18-.08-.35-.18-.5-.28-.15-.1-.3-.2-.44-.32-.14-.12-.28-.25-.4-.4s-.22-.28-.34-.45-.2-.33-.3-.5-.15-.33-.2-.5-.1-.32-.1-.5c0-.2.02-.38.07-.56.05-.18.12-.35.22-.5.1-.15.22-.28.36-.4.14-.12.3-.22.48-.3.18-.08.38-.12.6-.12.1,0,.2,0,.3.02.1,0,.2.02.3.04.1,0,.2.04.3.06.1,0,.2.07.3.1.1.02.2.05.28.1.1.04.18.1.25.15s.14.1.2.15.1.1.15.15.08.1.1.15.05.1.07.13.03.08.04.1.02.07.02.1zm3.24-9.25c-1.5-1.5-3.5-2.32-5.58-2.32-4.35,0-7.88,3.53-7.88,7.88,0,1.4.37,2.72,1.04,3.87l-1.1,4.02,4.1-1.08c1.1,0.6,2.34,0.94,3.64,0.94,0.02,0,0.03,0,0.05,0h0c4.35,0,7.88-3.53,7.88-7.88,0-2.07-.83-4.07-2.33-5.58zm-5.58,12.4c-1.2,0-2.34-.33-3.32-.92l-.24-.14-2.48.65.66-2.4-0.16-.25c-.65-1.02-1-2.2-1-3.44,0-3.56,2.9-6.46,6.46-6.46,1.73,0,3.35.67,4.57,1.9,1.2,1.2,1.9,2.84,1.9,4.57s-2.9,6.46-6.46,6.46z" />
  </svg>
);

const FloatingCTA = () => {
  const phoneNumber = "+447859268006";
  const whatsappMessage = "Hi! I'm interested in B2B opportunities with Silver Snow Energy.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneCallUrl = `tel:${phoneNumber}`;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact Us on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={phoneCallUrl}
        className="bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </motion.div>
  );
};

export default FloatingCTA;