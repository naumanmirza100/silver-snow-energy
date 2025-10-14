import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Nutrition = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, once: true });

    const nutritionalData = [
        { name: 'Energy Value', value: '200kJ / 47 kcal' },
        { name: 'Fat', value: '<0.5g' },
        { name: 'of which Saturates', value: '<0.1g', indent: true },
        { name: 'Carbohydrate', value: '11g' },
        { name: 'of which Sugars', value: '11g', indent: true },
        { name: 'Protein', value: '<0.5g' },
        { name: 'Salt', value: '0.12g' }
    ];

    const vitaminsData = [
        { name: 'Niacin', value: '8.0mg (50%*)' },
        { name: 'Vitamin B6', value: '0.7mg (50%*)' },
        { name: 'Pantothenic Acid', value: '2.0mg (33%*)' },
        { name: 'Vitamin B12', value: '0.2µg (8%*)' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <section id="nutrition" className="py-24 md:py-32 bg-white">
            <div ref={ref} className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h2 className="bebas text-5xl md:text-7xl font-bold tracking-wide text-slate-800">
                        Nutritional <span className="text-cyan-brand">Values</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-4">
                        A transparent look at what's inside every can. Per 100ml.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
                    <motion.div 
                        initial="hidden" 
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        className="bg-slate-50 p-8 rounded-2xl card-glow border border-slate-100 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-800">Key Nutrients</h3>
                        <div className="space-y-3 flex-grow">
                            {nutritionalData.map((item) => (
                                <motion.div variants={itemVariants} key={item.name} className={`flex justify-between items-baseline pb-3 border-b border-slate-200 ${item.indent ? 'ml-4' : ''}`}>
                                    <p className="text-slate-600">{item.name}</p>
                                    <p className="font-bold text-slate-800">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial="hidden" 
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        className="bg-slate-50 p-8 rounded-2xl card-glow border border-slate-100 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-800">Vitamins</h3>
                        <div className="space-y-3 flex-grow">
                            {vitaminsData.map((item) => (
                                <motion.div variants={itemVariants} key={item.name} className="flex justify-between items-baseline pb-3 border-b border-slate-200">
                                    <p className="text-slate-600">{item.name}</p>
                                    <p className="font-bold text-cyan-brand">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 mt-6">*Nutrient reference values for adults</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Nutrition;