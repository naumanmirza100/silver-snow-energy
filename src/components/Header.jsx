import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
    { name: 'Why Partner', href: '#about' },
    { name: 'The Product', href: '#product' },
    { name: 'Advantages', href: '#features' },
    { name: 'Partners', href: '#partnership' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            if (location.pathname !== '/') {
                window.location.href = `/${href}`;
            } else {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        setIsOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/80" : "bg-transparent shadow-none"
            )}
        >
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <img
                        src="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/9e7b51ba886a63ef92e742e733ec5699.png"
                        alt="Silver Snow Energy Logo"
                        className="h-10 w-auto"
                    />
                </Link>

                <ul className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-slate-700 hover:text-cyan-brand transition-colors font-medium text-base"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Button asChild variant="outline" className="rounded-full font-semibold text-base">
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button asChild className="rounded-full font-semibold text-base">
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                Get Started
                            </Link>
                        </Button>
                    </li>
                </ul>

                <button
                    className="lg:hidden text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                            className="fixed inset-y-0 right-0 w-full bg-white z-40 p-6 shadow-lg lg:hidden flex flex-col items-center justify-center space-y-8"
                        >
                            <button
                                className="absolute top-6 right-6 text-slate-800"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close navigation"
                            >
                                <X className="h-8 w-8" />
                            </button>
                            <ul className="flex flex-col items-center space-y-6">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="text-slate-800 hover:text-cyan-brand text-2xl font-bold transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Button asChild variant="outline" size="lg" className="rounded-full font-semibold text-xl px-8 py-6">
                                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                                            Contact
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild size="lg" className="rounded-full font-semibold text-xl px-8 py-6">
                                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                                            Get Started
                                        </Link>
                                    </Button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;