import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Gallery = () => {
    const [ref, isInView] = useInView({ threshold: 0.1, once: true });

    const images = [
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/98d994ee900e22df5e610d1ef2440739.jpg", // Woman in fur hat holding can
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/5e984b9d6151b67f83f0450e034601c1.jpg", // Woman with glitter holding can
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/ec59e0a9219d0d9ee659e8c3903f3b4a.jpg", // Woman with wet hair holding can
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/53565583d05178ca2bb3e59b303091b8.jpg", // New image
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/bf3264ab83df52c28142eeca4cc82c7d.jpg", // Woman with sunglasses
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/20ab2cbf171dfae855de43020fa6b7d0.jpg", // Blue car with SNOW logo
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/3631e013fa6fbf9cd86ba00f2b1df03a.jpg", // Cans in ice
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/ab0fcb9d8f4d916fa2eeaa8c3276be62.jpg", // Woman in SNOW t-shirt
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/bbaa80fa2594dc459322202f741df304.jpg", // Group of friends
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/c19543a52207fcb1ffa246cea301517f.jpg", // Two women with blue light
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/d3fa693eb71c31cac21339db1ea23260.jpg", // Woman in fur hat
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/74914dcb4e7b064366070b389b4f4a3f.jpg", // Audi with SNOW logo
        "https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/b03d8427f0c3bfe315ed3b3c6904aedb.jpg", // Group of women with cans
    ];

    const galleryVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        },
    };

    const imageStyles = [
      "md:col-span-2", // Woman in fur hat holding can
      "md:col-span-2", // Woman with glitter holding can
      "md:col-span-2", // Woman with wet hair holding can
      "md:col-span-2", // New image
      "md:col-span-2", // Woman with sunglasses
      "md:col-span-2", // Blue car with SNOW logo
      "md:col-span-3", // Cans in ice
      "md:col-span-3", // Woman in SNOW t-shirt
      "md:col-span-2", // Group of friends
      "md:col-span-2", // Two women with blue light
      "md:col-span-2", // Woman in fur hat
      "md:col-span-3", // Audi with SNOW logo
      "md:col-span-3", // Group of women with cans
    ];

    return (
        <section id="gallery" className="py-24 md:py-32 bg-white">
            <div ref={ref} className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="bebas text-5xl md:text-7xl font-bold tracking-wide text-slate-800">
                        A Brand in <span className="text-cyan-brand">Action</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-4">
                        Visualize the market presence and premium lifestyle appeal of Silver Snow Energy.
                    </p>
                </motion.div>

                <motion.div
                    variants={galleryVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-2 md:grid-cols-6 auto-rows-fr gap-4 md:gap-6"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={imageVariants}
                            whileHover={{ scale: 1.05, zIndex: 10, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className={`relative overflow-hidden rounded-2xl shadow-lg group card-glow ${imageStyles[index] || 'md:col-span-2'}`}
                        >
                            <img 
                                src={src} 
                                alt={`Silver Snow Energy lifestyle image ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;