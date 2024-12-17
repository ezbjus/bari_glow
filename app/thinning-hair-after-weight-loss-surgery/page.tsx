'use client'

import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ThinningHairAfterWeightLossSurgery() {
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
        <motion.h1 className="text-3xl font-bold mb-6" variants={fadeInUp}>Thinning Hair After Weight Loss Surgery</motion.h1>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Thinning hair is a common side effect experienced by many patients after weight loss surgery. While it can be distressing, it's important to understand that this is usually a temporary condition.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Why Does Hair Thinning Occur?</motion.h2>
        
        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Telogen effluvium: A temporary condition where hair follicles enter a resting phase</li>
          <li>Nutritional deficiencies, particularly in protein, iron, and zinc</li>
          <li>Hormonal changes due to rapid weight loss</li>
          <li>Stress on the body from surgery and lifestyle changes</li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Addressing Hair Thinning</motion.h2>
        
        <motion.p className="mb-4" variants={fadeInUp}>
          Here are some strategies to help combat hair thinning after weight loss surgery:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6" variants={fadeInUp}>
          <li>Focus on nutrient-dense foods and proper supplementation</li>
          <li>Ensure adequate protein intake</li>
          <li>Consider using specialized hair care products like Bari Glow</li>
          <li>Be gentle with your hair - avoid harsh treatments and excessive heat styling</li>
          <li>Stay hydrated and manage stress levels</li>
        </motion.ul>

        <motion.p variants={fadeInUp}>
          Remember, patience is key. Most patients see improvement in hair thickness within 6-12 months as their body adjusts to the changes from surgery.
        </motion.p>
      </motion.article>
      <Sidebar />
    </>
  )
}

