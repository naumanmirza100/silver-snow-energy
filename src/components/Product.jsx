
import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from '@/hooks/useInView';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import { cn } from '@/lib/utils';
    
    const Product = () => {
      const [ref, isInView] = useInView({ threshold: 0.3, once: true });
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
      };
    
      const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      };
    
      const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' },
        },
      };
    
      return (
        <section id="product" className="py-24 md:py-32 bg-white overflow-hidden">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="container mx-auto px-4"
          >
            <div className="text-center">
                <motion.h2 variants={textVariants} className="bebas text-5xl md:text-7xl font-bold text-cyan-brand tracking-wide leading-tight">
                The Classic: Your Next Bestseller
                </motion.h2>
                <motion.p variants={textVariants} className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                Discover the original Silver Snow Energy, a timeless classic that delivers pure, unadulterated energy.
                </motion.p>
            </div>
    
            <div className="mt-16 lg:mt-24 relative">
                <div className="grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <motion.div 
                        variants={imageVariants} 
                        className="relative lg:col-start-2 flex justify-center items-center"
                    >
                        <img
                            src="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/96ecd46cf2f45f64bff522720321d26f.png"
                            alt="Four Silver Snow Energy cans (Sports, Natural, Classic, Mojito) with text 'Fuel Your Dreams'"
                            className="relative z-10 w-full max-w-lg rounded-lg drop-shadow-[0_0_35px_rgba(0,180,216,0.35)]"
                        />
                    </motion.div>
    
                    <motion.div 
                        variants={textVariants}
                        className="relative z-20 lg:row-start-1 lg:col-start-1 mt-8 lg:mt-0 flex items-center"
                    >
                        <div className="gradient-border-card w-full">
                            <div className="bg-white p-8 md:p-12 rounded-[inherit] text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
                                Unleash the Power of the Original
                                </h3>
                                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                Silver Snow Energy Classic is meticulously crafted to provide a sustained energy boost without the jitters. Its crisp, refreshing taste makes it the perfect companion for any challenge.
                                </p>
                                <ul className="mt-6 space-y-3 text-lg text-slate-700">
                                <li className="flex items-center justify-center lg:justify-start">
                                    <svg className="w-6 h-6 text-cyan-brand mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Sustained Energy Release</span>
                                </li>
                                <li className="flex items-center justify-center lg:justify-start">
                                    <svg className="w-6 h-6 text-cyan-brand mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Crisp & Refreshing Taste</span>
                                </li>
                                <li className="flex items-center justify-center lg:justify-start">
                                    <svg className="w-6 h-6 text-cyan-brand mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>No Artificial Preservatives</span>
                                </li>
                                </ul>
                                <div className="mt-10">
                                <Button asChild size="lg" className="rounded-full font-bold text-lg px-12 py-7">
                                    <Link to="/contact">
                                    Become a Stockist
                                    </Link>
                                </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
          </motion.div>
        </section>
      );
    };
    
    export default Product;
