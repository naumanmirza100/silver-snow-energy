import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const standards = [
    'Vegan Approved',
    'ISO 9001:2008',
    'BRC Storage & Distribution Verified',
    'ISO 22000',
    'UKAS Management Systems',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="standards" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-brand/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-brand/5 rounded-full blur-3xl opacity-50"></div>
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="bebas text-5xl md:text-7xl font-bold tracking-wide text-slate-800">
            The <span className="text-cyan-brand">Responsible</span> Choice
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4">
            We're committed to the highest standards of quality and safety, ensuring every can meets rigorous global benchmarks.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6"
        >
          {standards.map((standard) => (
            <motion.div
              key={standard}
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <CheckCircle2 className="w-7 h-7 text-cyan-brand flex-shrink-0" />
              <p className="font-semibold text-slate-700 text-base md:text-lg">{standard}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;