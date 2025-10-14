import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ShieldCheck, Globe, Star } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });

  const textBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const standards = [
    { icon: ShieldCheck, text: "Halaal & Kosher Certified" },
    { icon: Globe, text: "EU Manufacturing Standards" },
    { icon: Star, text: "Premium, Preservative-Free Ingredients" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 section-bg-gradient">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 md:gap-16 items-start">
          <motion.div 
            variants={textBlockVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3 space-y-6"
          >
            <h2 className="bebas text-5xl md:text-6xl font-bold tracking-wide text-slate-800">
              A <span className="text-cyan-brand">Brand Built</span> for Business
            </h2>
            <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
              <p>
                Silver Snow Energy™ is more than an energy drink; it’s a strategic asset for your business. Manufactured in the EU with a clean, preservative-free formula, it delivers the classic taste and quality your customers demand.
              </p>
              <p className="font-semibold text-slate-700">
                Partner with us for a high-demand product backed by a brand that understands the market. Choosing Silver Snow means choosing a product engineered for retail success and customer loyalty.
              </p>
            </div>
          </motion.div>
          <motion.div 
            variants={textBlockVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 rounded-2xl card-glow space-y-6"
          >
              <h3 className="text-2xl font-bold text-slate-800">Your Mark of Quality</h3>
              <p className="text-slate-600">
                  Offer your customers a product that meets the highest global certification and quality standards.
              </p>
              <div className="space-y-5 pt-2">
                  {standards.map((standard, index) => (
                      <div key={index} className="flex items-center space-x-4">
                           <div className="flex-shrink-0 bg-cyan-brand/10 p-3 rounded-full">
                                <standard.icon className="w-6 h-6 text-cyan-brand" />
                           </div>
                          <span className="text-lg text-slate-700 font-medium">{standard.text}</span>
                      </div>
                  ))}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;