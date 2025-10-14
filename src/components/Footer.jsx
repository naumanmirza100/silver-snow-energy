import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const TiktokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 7.5a4.5 4.5 0 0 1-4.5 4.5H12V7.5a4.5 4.5 0 0 1 4.5-4.5h0A4.5 4.5 0 0 1 21 7.5Z" />
    <path d="M12 16.5V7.5" />
    <path d="M12 16.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
  </svg>
);

const Footer = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNotImplemented = (e) => {
        e.preventDefault();
        toast({
            title: "Coming Soon!",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1A8GAEDraR/?mibextid=wwXIfr", name: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/silversnowenergy?igsh=M3VtaWZ5OTgycGdj", name: "Instagram" },
        { icon: TiktokIcon, href: "https://www.tiktok.com/@silversnowenergy?_t=ZS-90UvbufUraa&_r=1", name: "TikTok" },
    ];

    const quickLinks = [
        { name: 'Why Partner', href: '#about' },
        { name: 'The Product', href: '#product' },
        { name: 'Advantages', href: '#features' },
        { name: 'Partners', href: '#partnership' },
    ];

    const handleFooterLinkClick = (e, href) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/${href}`);
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer id="footer" className="bg-slate-900 text-slate-400">
            <div className="container mx-auto px-4 py-20 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <img src="https://horizons-cdn.hostinger.com/b848fad0-2905-4afb-8c32-a4fdc03e3c29/9e7b51ba886a63ef92e742e733ec5699.png" alt="Silver Snow Energy Logo" className="w-40 h-auto opacity-70 mb-4" />
                        <p className="bebas text-xl tracking-widest text-white">FRESH POWER INSIDE</p>
                        <div className="flex space-x-5 mt-6">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-brand transition-colors transform hover:scale-110">
                                    <link.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleFooterLinkClick(e, link.href)} className="hover:text-cyan-brand transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase">Contact us</h3>
                        <ul className="space-y-4 text-slate-300">
                             <li className="flex items-start justify-center md:justify-start gap-3">
                                <MapPin className="w-5 h-5 text-cyan-brand flex-shrink-0 mt-1" />
                                <address className="not-italic">Unit 1, Parliament Business Centre, L8 7BL</address>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Phone className="w-5 h-5 text-cyan-brand flex-shrink-0" />
                                <a href="tel:+447859268006" className="hover:text-cyan-brand transition-colors">+44 7859 268006</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Mail className="w-5 h-5 text-cyan-brand flex-shrink-0" />
                                <a href="mailto:sales@silversnowenergy.co.uk" className="hover:text-cyan-brand transition-colors">sales@silversnowenergy.co.uk</a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    >
                        <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link to="/privacy-policy" className="hover:text-cyan-brand transition-colors whitespace-nowrap">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-cyan-brand transition-colors whitespace-nowrap">Terms of Service</Link></li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 pt-8 border-t border-slate-700/50 text-center text-sm space-y-3"
                >
                    <p>© {new Date().getFullYear()} Silver Snow Energy™. All rights reserved.</p>
                    <p className="text-slate-500">
                        Designed by <a href="https://www.laskontech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-brand hover:text-cyan-300 transition-colors">Laskon Technologies</a>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;