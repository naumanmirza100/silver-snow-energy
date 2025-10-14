
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CallToAction = ({ 
    id, 
    title, 
    subtitle,
    description,
    buttonText, 
    imageSrc, 
    imageAlt, 
    imageOnLeft = false, 
    bgColor = 'bg-slate-50',
    titleClass = 'text-cyan-brand',
    subtitleClass = 'text-slate-600',
    imageGlow = false,
    layout = 'horizontal',
    titleIsGradient = false
}) => {
    const [ref, isInView] = useInView({ threshold: 0.3, once: true });
    const { toast } = useToast();

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
        hidden: { opacity: 0, x: layout === 'horizontal' && (imageOnLeft ? 50 : -50), y: layout === 'vertical' ? -30 : 0 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const isHorizontal = layout === 'horizontal';

    const renderContent = () => {
      const content = (
        <>
            <h2 className={cn("bebas text-5xl md:text-7xl font-bold tracking-wide leading-tight", subtitleClass)}>
                {subtitle}
            </h2>
            <p className={cn("mt-4 text-xl md:text-2xl max-w-md mx-auto lg:mx-0", titleClass, { 'text-gradient-cyan': titleIsGradient })}>
                {title}
            </p>
            {description && (
                <div className="mt-6 space-y-4 max-w-md mx-auto lg:mx-0">
                    <div className="w-24 h-1 bg-cyan-brand/30 mx-auto lg:mx-0 rounded-full"></div>
                    <p className="text-slate-500 leading-relaxed">{description}</p>
                </div>
            )}
            <div className="mt-10">
                <Button asChild size="lg" className="rounded-full font-bold text-lg px-12 py-7">
                    <Link to="/contact">
                        {buttonText}
                    </Link>
                </Button>
            </div>
        </>
      );

      if (isHorizontal) {
        return (
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
                variants={imageVariants}
                className={cn("flex justify-center", { "lg:order-last": !imageOnLeft })}
            >
                <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className={cn(
                        "w-full max-w-lg rounded-lg",
                        { "drop-shadow-[0_0_35px_rgba(0,180,216,0.35)]": imageGlow && (bgColor === 'bg-white' || bgColor === 'bg-slate-50') },
                        { "drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]": imageGlow && !(bgColor === 'bg-white' || bgColor === 'bg-slate-50') }
                    )} 
                />
            </motion.div>
            <motion.div
                variants={textVariants}
                className={cn("text-center lg:text-left", { "lg:order-first": !imageOnLeft })}
            >
                {content}
            </motion.div>
          </div>
        );
      }

      // Vertical layout
      return (
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={textVariants} className="mb-12">
            {content}
          </motion.div>
          <motion.div variants={imageVariants} className="flex justify-center">
             <img 
                src={imageSrc} 
                alt={imageAlt} 
                className={cn(
                    "w-full max-w-xl",
                    { "drop-shadow-[0_0_35px_rgba(0,180,216,0.35)]": imageGlow && (bgColor === 'bg-white' || bgColor === 'bg-slate-50') },
                    { "drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]": imageGlow && !(bgColor === 'bg-white' || bgColor === 'bg-slate-50') }
                )} 
             />
          </motion.div>
        </div>
      );
    };

    return (
        <section id={id} className={cn("py-24 md:py-32 overflow-hidden", bgColor)}>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
              {renderContent()}
            </motion.div>
        </section>
    );
};

export default CallToAction;
