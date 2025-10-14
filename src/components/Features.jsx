import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { DollarSign, Shield, Zap, Award, Target, Truck } from 'lucide-react';

const Features = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const features = [
    {
      icon: DollarSign,
      title: 'Strong Profit Margins',
      description: 'Benefit from competitive wholesale pricing and high consumer demand.',
    },
    {
      icon: Shield,
      title: 'Exclusive Territories',
      description: 'Secure your market with exclusive distribution rights in your region.',
    },
    {
      icon: Zap,
      title: 'High Market Demand',
      description: 'Align with a brand known for quality, performance, and style.',
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'Offer a product that meets rigorous EU, Halaal, and Kosher standards.',
    },
    {
      icon: Target,
      title: 'Full Marketing Support',
      description: 'Gain access to our marketing assets and campaigns to boost your sales.',
    },
    {
      icon: Truck,
      title: 'Reliable Supply Chain',
      description: 'Count on consistent and timely delivery to keep your business moving.',
    },
  ];

  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    hidden: { opacity: 0 }
  };

  const item = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hidden: { opacity: 0, y: 40 }
  };

  return (
    <section id="features" className="py-24 md:py-32 section-bg-gradient">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="bebas text-5xl md:text-7xl font-bold tracking-wide text-slate-800">
            The <span className="text-cyan-brand">Advantages</span> of Partnership
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4">
            We empower retailers and distributors with the tools, support, and quality product needed for guaranteed success.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={list}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item} className="bg-white p-8 rounded-2xl border border-slate-200/80 card-glow flex items-start space-x-6">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-cyan-brand/10 p-3 rounded-full">
                  <feature.icon className="w-7 h-7 text-cyan-brand" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;