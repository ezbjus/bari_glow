'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Script from 'next/script'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HairLossVSG() {
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
        <motion.h1 className="text-3xl font-bold mb-6" variants={fadeInUp}>Hair Loss After Vertical Sleeve Gastrectomy (VSG)</motion.h1>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Vertical Sleeve Gastrectomy (VSG) is a popular bariatric surgery option, but like other weight loss surgeries, it can sometimes lead to hair loss. This is often temporary but can be concerning for many patients.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Why Does Hair Loss Occur After VSG?</motion.h2>
        
        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Rapid weight loss</li>
          <li>Reduced nutrient absorption</li>
          <li>Stress on the body from surgery</li>
          <li>Potential nutritional deficiencies</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Managing Hair Loss After VSG</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          While some hair loss is normal, there are steps you can take to minimize it:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Ensure adequate protein intake</li>
          <li>Take recommended supplements, including biotin</li>
          <li>Stay hydrated</li>
          <li>Manage stress</li>
          <li>Consider using specialized products like Bari Glow</li>
        </motion.ul>

        <motion.p variants={fadeInUp}>
          Remember, hair loss after VSG is usually temporary. With proper nutrition and care, most patients see their hair start to regrow within 6-12 months post-surgery.
        </motion.p>
      </motion.article>
      <Sidebar />
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Hair Loss After Vertical Sleeve Gastrectomy (VSG)",
            "description": "Understanding and managing hair loss that occurs after Vertical Sleeve Gastrectomy (VSG)",
            "image": "https://www.bariglow.com/images/hair-loss-vsg.jpg",
            "author": {
              "@type": "Organization",
              "name": "Bari Glow"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bari Glow",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.bariglow.com/logo.png"
              }
            },
            "datePublished": "2023-06-15",
            "dateModified": "2023-06-15"
          })
        }}
      />
    </>
  )
}

