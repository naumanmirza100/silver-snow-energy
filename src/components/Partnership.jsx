import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Partnership = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });

  return (
    <section id="partnership" className="py-24 md:py-32 section-bg-gradient">
      <div ref={ref} className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="bebas text-5xl md:text-7xl font-bold tracking-wide text-slate-800 mb-6">
            Now Available in the <span className="text-cyan-brand">UK</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We've partnered with the well-renowned tea trading brand, Stratton Tea, to bring Silver Snow Energy to the United Kingdom, ensuring a professional and established distribution network.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="bg-white p-10 md:p-12 rounded-2xl card-glow"
          >
            <p className="text-2xl text-slate-700 mb-4">
              Our Exclusive UK Distribution Partner
            </p>
            <h3 className="bebas text-5xl md:text-6xl text-cyan-brand mb-8 tracking-wider">Stratton Tea</h3>
            
            <Button asChild size="lg" className="bg-cyan-brand hover:bg-cyan-brand/90 text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
              <Link to="/contact" className="inline-flex items-center gap-3">
                Partner With Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;