import { Metadata } from 'next';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Stay With Us - Wapung Farm',
  description:
    'Experience farm life with a stay at Wapung Farm. Enjoy our cozy accommodations and immerse yourself in nature.',
};

export default function StayWithUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 sm:py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Stay With Us
            </h1>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Farm Stay Accommodation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                  Experience Farm Life
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  Immerse yourself in the beauty of Wapung Farm with our unique
                  farm stay experience. Enjoy cozy accommodations, breathtaking
                  views, and the opportunity to connect with nature.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  During your stay, you can participate in farm activities,
                  enjoy farm-to-table meals, and relax in the serene countryside
                  environment.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition-colors">
                  Book Your Farm Stay
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
