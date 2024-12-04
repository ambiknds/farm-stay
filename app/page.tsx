import { Metadata } from 'next';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Products } from './components/products';
import { About } from './components/about';
import { Testimonials } from './components/testimonials';

export const metadata: Metadata = {
  title: 'Wapung Farm - Organic Produce Direct from Farm to Table',
  description:
    "Experience the freshness of Wapung Farm's organic produce, delivered directly from our farm to your table. Discover our range of sustainably grown fruits and vegetables.",
  openGraph: {
    title: 'Wapung Farm - Organic Produce Direct from Farm to Table',
    description:
      "Experience the freshness of Wapung Farm's organic produce, delivered directly from our farm to your table.",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        width: 1200,
        height: 630,
        alt: 'Wapung Farm Organic Produce',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
        <About />
        <Testimonials />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Wapung Farm',
            url: 'https://www.wapungfarm.com',
            logo: 'https://www.wapungfarm.com/logo.png',
            description: 'Organic produce direct from farm to table',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Farm Road',
              addressLocality: 'Wapung',
              addressRegion: 'WP',
              postalCode: '12345',
              addressCountry: 'US',
            },
          }),
        }}
      />
    </div>
  );
}
