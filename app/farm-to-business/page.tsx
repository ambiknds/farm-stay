import { Metadata } from 'next';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Farm to Business - Farm Stay',
  description:
    'Partner with Farm Stay for premium, organic produce for your business. Discover our Farm to Business program.',
};

export default function FarmToBusiness() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 sm:py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Farm to Business
            </h1>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                  Premium Produce for Your Business
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  Farm Stay's Farm to Business program provides restaurants,
                  hotels, and food service companies with the highest quality
                  organic produce. Elevate your offerings with our farm-fresh
                  ingredients.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  We offer flexible delivery schedules, custom growing programs,
                  and bulk pricing to meet the unique needs of your business.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition-colors">
                  Request a Business Consultation
                </button>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Farm to Business"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
