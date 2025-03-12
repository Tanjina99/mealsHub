"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, MenuIcon, PhoneIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full border-b-[1px] border-b-smooth bg-white dark:border-gray-800 dark:bg-gray-950 rounded-b-lg">
      <div className=" mx-auto max-w-[1300px] flex h-17 items-center justify-between px-4 md:px-6">
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

        {/* Desktop Navigation */}
        {/* <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
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
        </ul> */}

        <ul className="hidden md:flex space-x-6 text-text-color font-medium">
          <li>
            <a
              href="/"
              className={`hover:text-primary transition ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/meals"
              className={`hover:text-primary transition ${
                pathname === "/meals" ? "text-primary" : ""
              }`}
            >
              Meals
            </a>
          </li>
          <li>
            <a
              href="/upcoming-meals"
              className={`hover:text-primary transition ${
                pathname === "/upcoming-meals" ? "text-primary" : ""
              }`}
            >
              UpComing Meals
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`hover:text-primary transition ${
                pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className={`hover:text-primary transition ${
                pathname === "/contact" ? "text-primary" : ""
              }`}
            >
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
          <DropdownMenu>
            <Link href="/signin">
              <span>
                <CircleUser className="text-primary" />
              </span>
            </Link>
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
                  href="/meals"
                  className="text-sm font-medium text-custom-primary"
                >
                  Meals
                </Link>
                <Link
                  href="/upcoming-meals"
                  className="text-sm font-medium text-custom-primary"
                >
                  UpComing Meals
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-custom-primary"
                >
                  About
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
