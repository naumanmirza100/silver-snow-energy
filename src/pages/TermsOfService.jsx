import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <Helmet>
        <title>SNOW ENERGY</title>
        <meta name="description" content="Read the Terms of Service for Silver Snow Energy™, governing the use of our website and B2B partnership agreements." />
      </Helmet>
      <div className="bg-white py-24 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 prose prose-lg max-w-4xl"
        >
          <motion.h1 variants={itemVariants} className="bebas text-5xl md:text-6xl text-cyan-brand not-prose">Terms of Service</motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500">Last updated: {new Date().toLocaleDateString('en-GB')}</motion.p>

          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>Welcome to Silver Snow Energy™. These terms and conditions outline the rules and regulations for the use of our website and the terms governing our business-to-business (B2B) relationships. By accessing this website and/or entering into a business relationship with us, you accept these terms in full.</p>
          </motion.div>

          <motion.h2 variants={itemVariants}>1. Website Use</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>The content on this website is for your general information and use only. It is subject to change without notice.</p>
            <ul>
              <li>You may not use this website for any unlawful purpose.</li>
              <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
              <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited.</li>
            </ul>
          </motion.div>

          <motion.h2 variants={itemVariants}>2. B2B Partnerships</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>All B2B sales, distribution agreements, and partnerships are governed by a separate, legally binding contract. The terms on this website are for informational purposes and do not supersede any formal agreement.</p>
            <ul>
              <li><strong>Orders:</strong> All orders are subject to acceptance and availability.</li>
              <li><strong>Pricing:</strong> Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, or discontinuance of the Service.</li>
              <li><strong>Payment:</strong> Payment terms will be specified in the formal B2B agreement.</li>
            </ul>
          </motion.div>

          <motion.h2 variants={itemVariants}>3. Product Information</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate. As a beverage product, it is the responsibility of the consumer to read all labels and warnings before consumption. Our products are not recommended for children, pregnant or breastfeeding women, and individuals sensitive to caffeine.</p>
          </motion.div>

          <motion.h2 variants={itemVariants}>4. Limitation of Liability</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>To the fullest extent permitted by applicable law, Silver Snow Energy™ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
          </motion.div>

          <motion.h2 variants={itemVariants}>5. Governing Law</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>These terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </motion.div>

          <motion.h2 variants={itemVariants}>6. Contact Us</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:SALES@SNOWENERGY.CO.UK" className="text-cyan-brand hover:underline">SALES@SNOWENERGY.CO.UK</a>.</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default TermsOfService;