import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Wind } from 'lucide-react';

const Ingredients = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, once: true });

    const ingredients = [
        "Water", "Sugar", "Carbon Dioxide", "Citric Acid", 
        "Taurine (400mg/100ml)", "Sodium Citrates", "Caffeine (32mg/100ml)", 
        "Ammonia Caramel", "Riboflavin", "Flavours", 
        "Niacin", "Vitamin B6", "Pantothenic Acid", "Vitamin B12"
    ];

    const listVariants = {
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
    };

    return (
        <section className="py-24 md:py-32 section-bg-gradient">
            <div ref={ref} className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="bebas text-5xl md:text-7xl font-bold tracking-wide text-slate-800">
                        Pure <span className="text-cyan-brand">Ingredients</span>, Peak <span className="text-cyan-brand">Performance</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-4">
                        We use only high-quality ingredients to create a clean, effective energy boost.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto bg-white p-10 md:p-12 rounded-2xl card-glow">
                    <motion.ul
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={listVariants}
                        className="flex flex-wrap gap-x-6 gap-y-4 justify-center"
                    >
                        {ingredients.map((ingredient) => (
                            <motion.li
                                key={ingredient}
                                variants={itemVariants}
                                className="flex items-center space-x-3 bg-slate-50 py-2 px-4 rounded-full border border-slate-200 transition-colors duration-300 hover:bg-slate-100 hover:border-slate-300"
                            >
                                <Wind className="w-5 h-5 text-cyan-brand flex-shrink-0" />
                                <span className="text-base text-slate-700 font-medium">{ingredient}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default Ingredients;