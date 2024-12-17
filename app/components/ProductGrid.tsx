import Image from 'next/image'
import Link from 'next/link'

// This is a mock product data. In a real application, you would fetch this data from an API.
const products = [
  { id: 1, name: 'Lavender Dream', price: 24.99, image: '/images/lavender-candle.jpg' },
  { id: 2, name: 'Vanilla Bliss', price: 22.99, image: '/images/vanilla-candle.jpg' },
  { id: 3, name: 'Citrus Burst', price: 26.99, image: '/images/citrus-candle.jpg' },
  { id: 4, name: 'Ocean Breeze', price: 25.99, image: '/images/ocean-candle.jpg' },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Link href={`/shop/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              View Product
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

