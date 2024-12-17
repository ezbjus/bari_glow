'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HairLossPostBariatricSurgery() {
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
        <motion.h1 className="text-3xl font-bold mb-6" variants={fadeInUp}>Hair Loss Post Bariatric Surgery</motion.h1>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Hair loss is a common concern for many patients following bariatric surgery. While it can be distressing, it's important to understand that this is usually a temporary condition that can be managed with proper care and nutrition.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Understanding Post-Bariatric Surgery Hair Loss</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Hair loss typically occurs 3-6 months after surgery and is caused by:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>The stress of surgery on the body</li>
          <li>Rapid weight loss</li>
          <li>Nutritional deficiencies</li>
          <li>Hormonal changes</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Managing Hair Loss</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Here are some strategies to help minimize hair loss and promote regrowth:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Ensure adequate protein intake (at least 60-80 grams per day)</li>
          <li>Take recommended vitamins and minerals, especially iron, zinc, and biotin</li>
          <li>Stay hydrated</li>
          <li>Use gentle hair care practices</li>
          <li>Consider using specialized products like Bari Glow to support hair health</li>
        </motion.ul>

        <motion.p variants={fadeInUp}>
          Remember, hair loss after bariatric surgery is usually temporary. Most patients see their hair start to regrow within 6-12 months. If hair loss persists or is severe, consult with your healthcare provider to rule out any underlying issues.
        </motion.p>
      </motion.article>
      <Sidebar />
    </>
  )
}

