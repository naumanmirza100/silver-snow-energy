import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Building, MessageSquare, Briefcase } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("UsIRF_fIEY6GHH4Ny");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
    if (errors.inquiryType) {
      setErrors((prev) => ({ ...prev, inquiryType: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsLoading(true);
      try {
        // Prepare template parameters
        const templateParams = {
          to_email: 'sales@silversnowenergy.co.uk',
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          inquiry_type: formData.inquiryType,
          message: formData.message,
          subject: `New Partnership Inquiry: ${formData.inquiryType}`,
          reply_to: formData.email,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        };

        // Send email using EmailJS
        const result = await emailjs.send(
          'service_mqp7gcu', // Service ID
          'template_nd31yzt', // You'll need to replace this with your actual template ID
          templateParams,
          'UsIRF_fIEY6GHH4Ny'         // Replace with your EmailJS public key
        );

        if (result.status === 200) {
          // Show success message
          toast({
            title: "Message Sent! 🎉",
            description: "Thanks for reaching out! We'll get back to you soon.",
          });

          // Reset form
          setFormData({
            name: '',
            email: '',
            company: '',
            inquiryType: '',
            message: '',
          });
          setErrors({});
        } else {
          throw new Error('Failed to send email');
        }

      } catch (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact us directly at sales@silversnowenergy.co.uk",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      toast({
        title: "Oops! Something's missing. 🧐",
        description: "Please fill out all required fields correctly.",
        variant: "destructive"
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-4 py-16 md:py-24 max-w-3xl"
    >
      <div className="relative z-10 gradient-border-card">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-4 bebas tracking-wide"
          >
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-600 text-center mb-10 leading-relaxed"
          >
            Ready to supercharge your business with Silver Snow Energy™? Fill out the form below, and let's discuss how we can grow together!
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label htmlFor="name" className="text-slate-700 font-medium text-base mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2 text-cyan-brand" /> Full Name <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(errors.name && "border-red-500 focus-visible:ring-red-500")}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label htmlFor="email" className="text-slate-700 font-medium text-base mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-cyan-brand" /> Email <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(errors.email && "border-red-500 focus-visible:ring-red-500")}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Label htmlFor="company" className="text-slate-700 font-medium text-base mb-2 flex items-center">
                  <Building className="w-4 h-4 mr-2 text-cyan-brand" /> Company Name
                </Label>
                <Input
                  type="text"
                  id="company"
                  placeholder="Your Company Inc."
                  value={formData.company}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Label htmlFor="inquiryType" className="text-slate-700 font-medium text-base mb-2 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-cyan-brand" /> Inquiry Type <span className="text-red-500 ml-1">*</span>
                </Label>
                <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
                  <SelectTrigger className={cn("w-full", errors.inquiryType && "border-red-500 focus-visible:ring-red-500")}>
                    <SelectValue placeholder="Select an inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wholesaler">Wholesaler Inquiry</SelectItem>
                    <SelectItem value="retailer">Retailer Inquiry</SelectItem>
                    <SelectItem value="small_business">Small Business Partnership</SelectItem>
                    <SelectItem value="medium_business">Medium Business Partnership</SelectItem>
                    <SelectItem value="large_business">Large Business Partnership</SelectItem>
                    <SelectItem value="general">General Business Inquiry</SelectItem>
                  </SelectContent>
                </Select>
                {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Label htmlFor="message" className="text-slate-700 font-medium text-base mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-cyan-brand" /> Your Message <span className="text-red-500 ml-1">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your business and how you envision partnering with Silver Snow Energy™..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={cn(errors.message && "border-red-500 focus-visible:ring-red-500")}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center pt-4"
            >
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto rounded-full font-bold py-7 px-12"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Inquiry"}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;