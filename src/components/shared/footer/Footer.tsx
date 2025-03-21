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
    <footer className="bg-light-mode-bg text-white py-6">
      <div className="mx-auto max-w-[1300px] px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-16 lg:gap-24">
        <div className="flex flex-col items-start space-y-2">
          <div className="py-1">
            <Link href="/">
              <Image
                src="https://i.ibb.co.com/vCgxyJbj/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-1.png"
                alt="Restaurant Logo"
                width={50}
                height={50}
                className="h-14 w-14"
              />
            </Link>
          </div>

          <p className="text-sm text-text-color">
            Discover delicious recipes and cooking tips for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-text-color mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-text-color hover:underline hover:decoration-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/meals"
                className="text-text-color hover:underline hover:decoration-primary"
              >
                Meals
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-text-color hover:underline hover:decoration-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-text-color hover:underline hover:decoration-primary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-text-color hover:underline hover:decoration-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-text-color mb-4">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
                <MapPin className="w-5 h-5 text-primary" />
              </div>

              <div>
                <p className="text-text-color mt-1">
                  123 Meal Avenue, Food City, USA
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-text-color mt-1">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-text-color mt-1">contact@chefFood.com</p>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-gray-500 pt-4">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 sm:mb-0 -ml-4">
          <Link href="#" className="text-text-color hover:text-primary">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-text-color hover:text-primary">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-text-color hover:text-primary">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>

        {/* Copyright & Policies */}
        <div className="text-text-color text-sm mt-4 md:mt-0 flex justify-between w-full space-x-6">
          <div className="flex-1 text-center">
            &copy; {new Date().getFullYear()} Chef Food. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex space-x-6 ml-auto">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
