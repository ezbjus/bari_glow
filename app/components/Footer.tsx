import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Bariglow</h3>
            <p>Handcrafted candles made with natural ingredients.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-blue-500">Shop</Link></li>
              <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-blue-500">FAQ</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-l-md border-t border-b border-l" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Bariglow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

