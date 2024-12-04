import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-green-800 text-white py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Wapung Farm</h3>
//             <p className="text-sm">
//               Bringing fresh, organic produce from our farm to your table since
//               1970.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/farm-to-customer"
//                   className="text-sm hover:text-green-200"
//                 >
//                   Farm to Customer
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/farm-to-business"
//                   className="text-sm hover:text-green-200"
//                 >
//                   Farm to Business
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/stay-with-us"
//                   className="text-sm hover:text-green-200"
//                 >
//                   Stay With Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/fpo" className="text-sm hover:text-green-200">
//                   FPO
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <p className="text-sm">123 Farm Road, Wapung, WP 12345</p>
//             <p className="text-sm">Email: info@wapungfarm.com</p>
//             <p className="text-sm">Phone: (555) 123-4567</p>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-green-700 text-center">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()} Wapung Farm. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

export function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Wapung Farm</h3>
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
                <span>9774779173</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>jhanikas@gmail.com</span>
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
            &copy; {new Date().getFullYear()} Wapung Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
