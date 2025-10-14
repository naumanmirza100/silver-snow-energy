import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
        <meta name="description" content="Read the Privacy Policy for Silver Snow Energy™, covering data protection under UK and EU laws for our customers and business partners." />
      </Helmet>
      <div className="bg-white py-24 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 prose prose-lg max-w-4xl"
        >
          <motion.h1 variants={itemVariants} className="bebas text-5xl md:text-6xl text-cyan-brand not-prose">Privacy Policy</motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500">Last updated: {new Date().toLocaleDateString('en-GB')}</motion.p>

          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>Silver Snow Energy™ ("we", "us", or "our") is committed to protecting and respecting your privacy. This policy outlines how we collect, use, and safeguard your information when you visit our website or engage with us as a business partner, in compliance with the UK General Data Protection Regulation (UK GDPR) and the EU General Data Protection Regulation (EU GDPR).</p>
          </motion.div>

          <motion.h2 variants={itemVariants}>1. Information We Collect</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>We may collect and process the following data about you:</p>
            <ul>
              <li><strong>Business Contact Information:</strong> When you inquire about B2B partnerships, we collect information such as your name, company name, email address, phone number, and business address.</li>
              <li><strong>Technical Data:</strong> Information about your device and browser, IP address, and how you interact with our website, collected via cookies and similar technologies.</li>
              <li><strong>Communication Data:</strong> Records of your correspondence with us via email, phone, or our website.</li>
            </ul>
          </motion.div>

          <motion.h2 variants={itemVariants}>2. How We Use Your Information</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To manage and fulfill our B2B partnership agreements.</li>
              <li>To communicate with you regarding inquiries, orders, and marketing information relevant to our partnership.</li>
              <li>To improve our website, products, and services.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </motion.div>

          <motion.h2 variants={itemVariants}>3. Legal Basis for Processing</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>Our legal basis for processing your personal data includes:</p>
            <ul>
              <li><strong>Contractual Necessity:</strong> To perform our contractual obligations with you as a business partner.</li>
              <li><strong>Legitimate Interests:</strong> To operate and grow our business, provided your rights do not override these interests.</li>
              <li><strong>Consent:</strong> Where you have provided explicit consent for specific processing activities (e.g., marketing communications).</li>
            </ul>
          </motion.div>

          <motion.h2 variants={itemVariants}>4. Data Sharing and Transfers</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>We do not sell your personal data. We may share your information with trusted third parties who provide services on our behalf, such as logistics partners and IT service providers. We ensure all third parties respect the security of your data and comply with GDPR. If we transfer data outside the UK/EEA, we will ensure appropriate safeguards are in place.</p>
          </motion.div>

          <motion.h2 variants={itemVariants}>5. Your Data Protection Rights</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>Under UK and EU data protection law, you have rights including:</p>
            <ul>
              <li><strong>Access:</strong> The right to request copies of your personal data.</li>
              <li><strong>Rectification:</strong> The right to request correction of inaccurate data.</li>
              <li><strong>Erasure:</strong> The right to request deletion of your data.</li>
              <li><strong>Restriction:</strong> The right to restrict processing of your data.</li>
              <li><strong>Portability:</strong> The right to request transfer of your data to another organization.</li>
              <li><strong>Objection:</strong> The right to object to processing of your data.</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:SALES@SNOWENERGY.CO.UK" className="text-cyan-brand hover:underline">SALES@SNOWENERGY.CO.UK</a>.</p>
          </motion.div>

          <motion.h2 variants={itemVariants}>6. Contact Us</motion.h2>
          <motion.div variants={itemVariants} className="space-y-4 text-slate-600">
            <p>If you have any questions about this privacy policy, please contact us via email at <a href="mailto:SALES@SNOWENERGY.CO.UK" className="text-cyan-brand hover:underline">SALES@SNOWENERGY.CO.UK</a> or by post at: UNIT 1, PARLIAMENT BUSINESS CENTRE, L8 7BL.</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy;