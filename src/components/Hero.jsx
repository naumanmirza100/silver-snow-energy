import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const heroContent = {
    title: "YOUR NEXT BESTSELLER",
    subtitle: "Stock the premium energy drink crafted for success. High demand meets strong profit margins.",
    buttonText: "EXPLORE PARTNERSHIP",
    imageSrc: "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/9ae891ab9aeb9c9c7991437f26fcd3a9.png",
    imageAlt: "Two Silver Snow Classic energy drink cans with text 'Lift Your Limits, 250ml EU-made, Preservative-free, Unmatched Power for Focus, Now in UK.'",
    bgColor: "bg-white",
    textColor: "text-cyan-brand",
    subtitleColor: "text-slate-600",
};

const Hero = () => {
    
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };
    
    const textItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section id="hero" className={cn("relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16", heroContent.bgColor)}>
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 animate-background-pan" style={{ backgroundSize: '200% 200%' }}></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            </div>
            <div className="container mx-auto px-4 h-full flex flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center gap-8 relative z-10">
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center lg:text-left order-2 lg:order-1"
                >
                    <motion.h1 variants={textItemVariants} className={cn("bebas text-6xl md:text-7xl lg:text-[6.5rem] font-bold tracking-wider leading-none", heroContent.textColor)}>
                        {heroContent.title}
                    </motion.h1>
                    <motion.p variants={textItemVariants} className={cn("mt-4 text-xl md:text-2xl max-w-lg mx-auto lg:mx-0", heroContent.subtitleColor)}>
                        {heroContent.subtitle}
                    </motion.p>
                    <motion.div variants={textItemVariants} className="mt-10">
                        <Button 
                            asChild
                            size="lg" 
                            className="bg-cyan-brand hover:bg-cyan-brand/90 text-white font-bold text-lg px-10 py-7 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                        >
                            <Link to="/contact">
                                {heroContent.buttonText}
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative flex justify-center order-1 lg:order-2"
                >
                    <img 
                        src={heroContent.imageSrc} 
                        alt={heroContent.imageAlt}
                        className="w-full max-w-sm lg:max-w-md h-auto drop-shadow-[0_0_45px_rgba(0,180,216,0.3)]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;