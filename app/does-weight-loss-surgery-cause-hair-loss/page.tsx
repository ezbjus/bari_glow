'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function DoesWeightLossSurgeryCauseHairLoss() {
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
        <motion.h1 className="text-3xl font-bold mb-6" variants={fadeInUp}>Does Weight Loss Surgery Cause Hair Loss?</motion.h1>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Many patients wonder if weight loss surgery directly causes hair loss. While hair loss is a common side effect of weight loss surgery, it's important to understand the relationship between the two and why it occurs.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>The Connection Between Weight Loss Surgery and Hair Loss</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Weight loss surgery itself doesn't directly cause hair loss, but the rapid weight loss and changes in the body that follow the surgery can lead to hair loss. This occurs due to:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Nutritional deficiencies, especially in protein, iron, and zinc</li>
          <li>Hormonal changes</li>
          <li>The physical stress of surgery and rapid weight loss</li>
          <li>Telogen effluvium, a temporary condition where hair follicles enter a resting phase</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Managing and Preventing Hair Loss</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          While some hair loss may be inevitable, there are steps you can take to minimize it:
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
          It's important to remember that hair loss after weight loss surgery is usually temporary. Most patients see improvement within 6-12 months as their body adjusts to the changes from surgery. If hair loss persists or is severe, consult with your healthcare provider to rule out any underlying issues.
        </motion.p>
      </motion.article>
      <Sidebar />
    </>
  )
}

