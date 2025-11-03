import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

// Import your images if they're in src/assets
import foodImage from '@/assets/images/certifications/food.jpg';
import ukasImage from '@/assets/images/certifications/ukas.jpg';
import veganImage from '@/assets/images/certifications/vegan.jpg';
import brcImage from '@/assets/images/certifications/brc.jpg';
import risoImage from '@/assets/images/certifications/riso.jpg';
import isoImage from '@/assets/images/certifications/iso.jpg';

const CertificationsImages = () => {
    const [ref, isInView] = useInView({ threshold: 0.2, once: true });

    const certifications = [
        {
            id: 1,
            name: 'International Standards',
            image: foodImage, // Use the imported image
            description: 'Compliant with international food standards'
        },
        {
            id: 2,
            name: 'UKAS Certification',
            image: ukasImage, // Use the imported image
            description: 'UKAS accredited certification body'
        },
        {
            id: 3,
            name: 'ISO 9001:2008',
            image: veganImage, // Use the imported image
            description: 'The Vegan Society'
        },
        {
            id: 4,
            name: 'BRC',
            image: brcImage, // Use the imported image
            description: 'Storage & Distribution Certificated'
        },
        {
            id: 5,
            name: 'ISO 22000',
            image: risoImage, // Use the imported image
            description: 'R'
        },
        {
            id: 6,
            name: 'ISO 9001:2008',
            image: isoImage, // Use the imported image
            description: 'Quality management system certified'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="certifications" className="py-24 md:py-32 bg-slate-50">
            <div ref={ref} className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h2 className="bebas text-5xl md:text-7xl font-bold tracking-wide text-slate-800">
                        Our <span className="text-cyan-brand">Certifications</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-4">
                        Trusted by industry leaders and certified by global standards
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col items-center text-center"
                        >
                            <div className="mb-6 p-4 bg-slate-50 rounded-xl w-full h-48 flex items-center justify-center">
                                {/* Use img tag with imported image src */}
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                {cert.name}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 text-sm">
                        All our facilities and processes are regularly audited and certified
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CertificationsImages;