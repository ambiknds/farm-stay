import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Beautiful farm landscape"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Wapung Farm</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">Experience the freshness of organic produce, from our farm to your table</p>
        <Link href="/farm-to-customer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition-colors">
          Explore Our Products
        </Link>
      </div>
    </section>
  )
}

