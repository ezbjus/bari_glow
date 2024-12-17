'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Script from 'next/script'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function PrivacyPolicy() {
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
        <motion.h1 variants={fadeInUp}>Privacy Policy</motion.h1>
        <motion.p variants={fadeInUp}>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Bari Glow.
        </motion.p>
        <motion.h2 variants={fadeInUp}>Personal Information We Collect</motion.h2>
        <motion.p variants={fadeInUp}>
          When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </motion.p>
        <motion.h2 variants={fadeInUp}>How We Use Your Personal Information</motion.h2>
        <motion.p variants={fadeInUp}>
          We use the personal information we collect to help us screen for potential risk and fraud, and more generally to improve and optimize our site for our users.
        </motion.p>
      </motion.article>
      <Sidebar />
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Bari Glow Privacy Policy",
            "description": "Privacy Policy for Bari Glow website and products",
            "url": "https://www.bariglow.com/privacy-policy",
            "publisher": {
              "@type": "Organization",
              "name": "Bari Glow"
            }
          })
        }}
      />
    </>
  )
}

