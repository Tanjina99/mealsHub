import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" text-white py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-16 lg:gap-24">
        <div className="flex flex-col items-start space-y-2">
          <div className="relative w-[90px] h-[90px] -mt-4 -ml-4">
            <Image
              src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
              alt="MyWebsite Logo"
              layout="fill"
              className="object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>

          <p className="text-sm text-gray-600">
            Discover delicious recipes and cooking tips for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-orange-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/meals"
                className="text-gray-600 hover:text-orange-200"
              >
                Meals
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-orange-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-600 hover:text-orange-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-orange-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-800" />
              <span className="text-gray-600 mr-2">
                123 Street, City, Country
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-800" />
              <span className="text-gray-600 mr-2">+123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-800" />
              <span className="text-gray-600">contact@cheffood.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 pt-4">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>

        {/* Copyright & Policies */}
        <div className="text-gray-500 text-sm mt-4 md:mt-0 flex justify-between w-full space-x-6">
          <div className="flex-1 text-center">
            &copy; {new Date().getFullYear()} Chef Food. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex space-x-6 ml-auto">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
