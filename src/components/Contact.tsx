"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        "service_cxzfual",
        "template_nrf7l29",
        formRef.current,
        "1DZHONZokuZR-8WqQ"
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-secondary text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind? Let's discuss how we can work together
        </motion.p>

        <div className="max-w-xl mx-auto">
          <motion.div
            className="glass-card hover-card rounded-xl border border-gray-100 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
}
