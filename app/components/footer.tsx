import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Farm Stay</h3>
            <p>
              {' '}
              Bringing fresh, organic produce from our farm to your table since
              1970. <br /> Nature-loving clients can enjoy our agri-tourism
              services.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>9779779977</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>emailacc@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>VisitMyStore</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-[#76B82A]">
                Facebook
              </Link>
              <Link href="#" className="hover:text-[#76B82A]">
                Instagram
              </Link>
              <Link href="#" className="hover:text-[#76B82A]">
                Twitter
              </Link>
            </div>
          </div>
          <div className="w-full h-[300px] bg-gray-200 rounded-lg">
            {/* Map placeholder - In a real implementation, you would integrate with a mapping service */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Integration
            </div>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-green-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Farm Stay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
