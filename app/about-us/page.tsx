'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Script from 'next/script'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function AboutUs() {
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
        <motion.h1 variants={fadeInUp}>About Us</motion.h1>
        <motion.p variants={fadeInUp}>
          At Bari Glow, we understand the unique challenges faced by individuals who have undergone weight loss surgery. Our mission is to provide specialized solutions for post-bariatric surgery hair care needs, helping our clients maintain healthy, beautiful hair throughout their weight loss journey.
        </motion.p>
        <motion.p variants={fadeInUp}>
          Founded by healthcare professionals with extensive experience in bariatric care, Bari Glow combines scientific research with practical solutions to address the specific nutritional needs that affect hair health after weight loss surgery.
        </motion.p>
      </motion.article>
      <Sidebar />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bari Glow",
            "url": "https://www.bariglow.com",
            "logo": "https://www.bariglow.com/logo.png",
            "description": "Specialized solutions for post-bariatric surgery hair care needs",
            "foundingDate": "2020",
            "founders": [
              {
                "@type": "Person",
                "name": "Dr. Jane Doe"
              },
              {
                "@type": "Person",
                "name": "Dr. John Smith"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Health Street",
              "addressLocality": "Wellness City",
              "addressRegion": "CA",
              "postalCode": "90210",
              "addressCountry": "USA"
            },
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

