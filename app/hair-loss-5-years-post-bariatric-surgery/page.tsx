'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Script from 'next/script'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HairLoss5YearsPost() {
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
        <motion.h1 className="text-3xl font-bold mb-6" variants={fadeInUp}>Hair Loss 5 Years Post Bariatric Surgery</motion.h1>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Hair loss after bariatric surgery is a common concern, but experiencing it 5 years post-surgery can be particularly distressing. While it's normal to experience some hair thinning in the months immediately following the procedure, persistent hair loss years later may indicate ongoing nutritional deficiencies or other health issues.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Possible Causes</motion.h2>
        
        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Chronic nutritional deficiencies, particularly in protein, iron, zinc, and vitamins</li>
          <li>Hormonal imbalances</li>
          <li>Stress or other health conditions</li>
          <li>Age-related hair thinning</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>What You Can Do</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          If you're experiencing hair loss 5 years after bariatric surgery, it's important to consult with your healthcare provider. They may recommend:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Comprehensive nutrient testing</li>
          <li>Adjusting your supplement regimen</li>
          <li>Exploring potential underlying health issues</li>
          <li>Considering treatments like Bari Glow to support hair health</li>
        </motion.ul>

        <motion.p variants={fadeInUp}>
          Remember, it's never too late to address hair loss. With proper care and nutrition, many individuals can improve their hair health, even years after bariatric surgery.
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
            "headline": "Hair Loss 5 Years Post Bariatric Surgery",
            "description": "Understanding and managing hair loss that occurs 5 years after bariatric surgery",
            "image": "https://www.bariglow.com/images/hair-loss-5-years-post.jpg",
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

