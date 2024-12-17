'use client'

import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Script from 'next/script'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
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
        <motion.h1 className="text-3xl font-bold mb-6" variants={fadeInUp}>Bari Glow for Hair Loss</motion.h1>
        
        <motion.h2 className="text-3xl font-bold mb-6" variants={fadeInUp}>Transform Your Hair Health Post-Weight Loss Surgery with Bari Glow</motion.h2>
        
        <motion.p className="mb-6" variants={fadeInUp}>
          Weight loss surgery can be a transformative journey, opening doors to healthier living, improved mobility, and enhanced self-confidence. However, this path is not without its challenges. Many individuals who undergo bariatric surgery encounter nutritional deficiencies that can lead to hair thinning or loss—a distressing side effect that affects self-esteem and confidence. Enter Bari Glow, a revolutionary product meticulously crafted to support hair health for those on this unique journey.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Understanding the Connection Between Weight Loss Surgery and Hair Loss</motion.h2>
        
        <motion.p className="mb-6" variants={fadeInUp}>
          Hair loss after weight loss surgery is a common issue, typically occurring about three to six months post-surgery. This phenomenon, known as telogen effluvium, is primarily a result of the body's response to dietary restrictions and nutritional imbalances. Post-surgery, rapid weight loss and changes in how your body absorbs nutrients can lead to deficiencies in critical vitamins and minerals necessary for hair growth, such as:
        </motion.p>

        <motion.ul className="list-disc pl-6 mb-6 space-y-2" variants={fadeInUp}>
          <li>
            <strong>Protein:</strong> Essential for the production of keratin, the protein that makes up the structure of hair.
          </li>
          <li>
            <strong>Iron:</strong> Vital for hair follicle cell growth, as it aids in delivering oxygen to hair roots.
          </li>
          <li>
            <strong>Zinc:</strong> Supports the functioning of oil glands around hair follicles.
          </li>
          <li>
            <strong>Biotin (Vitamin B7):</strong> Plays a crucial role in the production of keratin.
          </li>
          <li>
            <strong>Vitamin A, C, D, and E:</strong> Each contributes to the health of hair and scalp in different ways.
          </li>
        </motion.ul>

        <motion.h2 className="text-2xl font-bold mb-4" variants={fadeInUp}>Introducing Bari Glow: Your Solution to Hair Loss After Weight Loss Surgery</motion.h2>
        
        <motion.p className="mb-6" variants={fadeInUp}>
          Bariatric Glow is designed with post-weight-loss surgery patients in mind. Recognizing the unique nutritional challenges that come with bariatric procedures, our formula is specifically crafted to address the common deficiencies that lead to hair loss in this population.
        </motion.p>
      </motion.article>
      <Sidebar />
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bari Glow",
            "description": "A revolutionary product crafted to support hair health after weight loss surgery",
            "brand": {
              "@type": "Brand",
              "name": "Bari Glow"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.bariglow.com",
              "priceCurrency": "USD",
              "price": "49.99",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </>
  )
}

