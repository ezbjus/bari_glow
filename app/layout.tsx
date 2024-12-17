import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { motion, AnimatePresence } from 'framer-motion'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bari Glow - Hair Loss Solutions After Weight Loss Surgery',
  description: 'Transform your hair health post-weight loss surgery with Bari Glow. Expert solutions for managing hair loss after bariatric surgery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Bari Glow",
              "url": "https://www.bariglow.com",
              "description": "Expert solutions for managing hair loss after bariatric surgery",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.bariglow.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}

