import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, PhoneIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b-[1px] border-b-smooth bg-white dark:border-gray-800 dark:bg-gray-950 rounded-b-lg">
      <div className="container mx-auto flex h-17 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
              alt="MyWebsite Logo"
              fill
              className="object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <a href="/" className="hover:text-primary transition">
              Home
            </a>
          </li>
          <li>
            <a href="/meals" className="hover:text-primary transition">
              Meals
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-primary transition">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-primary transition">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-primary transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Utility Icons and Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            <PhoneIcon className="h-5 w-5 text-custom-primary" />
            <span className="text-custom-primary">123-456-7890</span>
          </div>

          {/* Search Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SearchIcon className="h-5 w-5 text-custom-primary" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-custom-primary" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dark Mode Toggle */}
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon className="h-5 w-5 text-custom-primary" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-custom-primary"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-custom-primary"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium text-custom-primary"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-custom-primary"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const landings = [
  { id: nanoid(), title: "Landing 01", route: "/project-management" },
  { id: nanoid(), title: "Landing 02", route: "/crm-landing" },
  { id: nanoid(), title: "Landing 03", route: "/ai-content-landing" },
  { id: nanoid(), title: "Landing 04", route: "/new-intro-landing" },
  { id: nanoid(), title: "Landing 05", route: "/about-us-landing" },
  { id: nanoid(), title: "Landing 06", route: "/contact-us-landing" },
  { id: nanoid(), title: "Landing 07", route: "/faqs-landing" },
  { id: nanoid(), title: "Landing 08", route: "/pricing-landing" },
  { id: nanoid(), title: "Landing 09", route: "/career-landing" },
];

export default Navbar;
