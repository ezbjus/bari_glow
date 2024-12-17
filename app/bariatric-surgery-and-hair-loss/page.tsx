'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function BariatricSurgeryAndHairLoss() {
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
        <motion.h1 className="text-3xl font-bold mb-6" variants={fadeInUp}>Bariatric Surgery And Hair Loss</motion.h1>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Hair loss is a common side effect of bariatric surgery that many patients experience. While it can be concerning, it's important to understand that this is usually a temporary condition that can be managed with proper care and nutrition.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>The Connection Between Bariatric Surgery and Hair Loss</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Hair loss after bariatric surgery is primarily due to:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Rapid weight loss</li>
          <li>Nutritional deficiencies, especially in protein, iron, and zinc</li>
          <li>Hormonal changes</li>
          <li>The physical stress of surgery</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Managing Hair Loss After Bariatric Surgery</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          While some hair loss is expected, there are steps you can take to minimize it:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Follow your post-surgery nutrition plan closely</li>
          <li>Ensure adequate protein intake (60-80 grams per day)</li>
          <li>Take recommended supplements, including a multivitamin with iron</li>
          <li>Stay hydrated</li>
          <li>Be gentle with your hair - avoid harsh treatments and excessive styling</li>
          <li>Consider using specialized products like Bari Glow to support hair health</li>
        </motion.ul>

        <motion.p variants={fadeInUp}>
          Remember, hair loss after bariatric surgery is usually temporary. Most patients see improvement within 6-12 months as their body adjusts to the changes from surgery. If hair loss persists or is severe, consult with your healthcare provider.
        </motion.p>
      </motion.article>
      <Sidebar />
    </>
  )
}

