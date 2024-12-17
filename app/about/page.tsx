import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Bariglow</h1>
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image src="/images/about.jpg" alt="Bariglow workshop" width={600} height={400} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg mb-4">
            Bariglow was founded in 2015 with a simple mission: to create high-quality, handcrafted candles using natural ingredients.
            Our passion for aromatherapy and sustainable living drives us to produce candles that not only smell amazing but are also
            eco-friendly and safe for your home.
          </p>
          <p className="text-lg mb-4">
            Each Bariglow candle is carefully made in small batches to ensure the best possible quality. We source our ingredients
            from trusted suppliers who share our commitment to sustainability and ethical practices.
          </p>
          <p className="text-lg">
            Thank you for choosing Bariglow. We hope our candles bring warmth, light, and a touch of nature into your home.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Handcrafted quality</li>
          <li>Natural ingredients</li>
          <li>Sustainable practices</li>
          <li>Exceptional customer service</li>
        </ul>
      </div>
    </div>
  )
}

