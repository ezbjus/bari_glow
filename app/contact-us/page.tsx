'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Script from 'next/script'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ContactUs() {
  return (
    <>
      <motion.article 
        className="flex-1"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        <motion.h1 variants={fadeInUp}>Contact Us</motion.h1>
        <motion.p variants={fadeInUp}>
          We're here to help you with any questions you may have about Bari Glow products or hair loss after weight loss surgery.
        </motion.p>
        <motion.form className="max-w-lg space-y-4" variants={fadeInUp}>
          <motion.div variants={fadeInUp}>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              required
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              required
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border rounded"
              rows={5}
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.article>
      <Sidebar />
      <Script
        id="schema-contactpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Bari Glow Contact Page",
            "description": "Contact Bari Glow for questions about our products or hair loss after weight loss surgery",
            "url": "https://www.bariglow.com/contact-us",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            }
          })
        }}
      />
    </>
  )
}

