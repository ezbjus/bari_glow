import Link from 'next/link'
import { motion } from 'framer-motion'

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export default function Sidebar() {
  return (
    <aside className="w-full md:w-80 shrink-0">
      <motion.div
        className="bg-white p-6 rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <motion.ul className="space-y-3" variants={listVariants} initial="hidden" animate="show">
          {[
            { href: "/hair-loss-5-years-post-bariatric-surgery", title: "Hair Loss 5 Years Post Bariatric Surgery" },
            { href: "/hair-loss-vsg", title: "Hair Loss Vsg" },
            { href: "/thinning-hair-after-weight-loss-surgery", title: "Thinning Hair After Weight Loss Surgery" },
            { href: "/losing-hair-after-weight-loss-surgery", title: "Losing Hair After Weight Loss Surgery" },
            { href: "/gastric-bypass-hair-loss", title: "Gastric Bypass Hair Loss" },
            { href: "/bariatric-surgery-and-hair-loss", title: "Bariatric Surgery And Hair Loss" },
            { href: "/hair-loss-post-bariatric-surgery", title: "Hair Loss Post Bariatric Surgery" },
            { href: "/hair-loss-after-wls", title: "Hair Loss After Wls" },
            { href: "/does-weight-loss-surgery-cause-hair-loss", title: "Does Weight Loss Surgery Cause Hair Loss" }
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link href={item.href} className="text-blue-600 hover:underline">
                {item.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </aside>
  )
}

