import { Metadata } from 'next';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Farm to Customer - Farm Stay',
  description:
    "Experience the freshness of Farm Stay's produce delivered directly to your doorstep. Learn about our Farm to Customer program.",
};

export default function FarmToCustomer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 sm:py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Farm to Customer
            </h1>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Farm to Customer"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                  Fresh Produce, Delivered to You
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  Our Farm to Customer program brings the freshness of Wapung
                  Farm directly to your doorstep. Enjoy a weekly selection of
                  seasonal, organic produce harvested at peak ripeness and
                  delivered within hours.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  By choosing our Farm to Customer service, you're not just
                  getting the freshest produce - you're supporting sustainable
                  farming practices and reducing food miles.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition-colors">
                  Sign Up for Weekly Deliveries
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
