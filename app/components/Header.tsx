import Link from 'next/link'
import { motion } from 'framer-motion'

const navItemVariants = {
  hover: { scale: 1.1, color: '#0066cc' }
}

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Bari Glow
          </Link>
        </motion.div>
        <nav>
          <ul className="flex gap-6">
            <motion.li variants={navItemVariants} whileHover="hover">
              <Link href="/bari-glow-for-hair-loss" className="text-blue-600 hover:underline">
                Bari Glow for Hair Loss
              </Link>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover="hover">
              <Link href="/about-us" className="text-gray-600 hover:underline">
                About Us
              </Link>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover="hover">
              <Link href="/contact-us" className="text-gray-600 hover:underline">
                Contact Us
              </Link>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover="hover">
              <Link href="/privacy-policy" className="text-gray-600 hover:underline">
                Privacy Policy
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

