"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  CircleUser,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  LogOut,
  LayoutDashboard,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useAuth from "@/hooks/useAuth";
import useAdmin from "@/hooks/useAdmin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

interface AdminUser {
  email: string;
  // Add other properties if they exist
}

const Navbar = () => {
  const pathname = usePathname();
  const { user, logOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUsers, isAdminLoading] = useAdmin() as [AdminUser[], boolean];

  useEffect(() => {
    if (user && !isAdminLoading && Array.isArray(adminUsers)) {
      const findAdmin = adminUsers.find(
        (individualUser) => individualUser.email === user?.email
      );

      setIsAdmin(!!findAdmin);
    }
  }, [user, adminUsers, isAdminLoading]);
  console.log(isAdmin);

  // Function to handle logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  // If user has no image it will show first letter of the user name
  const getInitials = (name: string | null): string => {
    return name ? name.charAt(0).toUpperCase() : "U";
  };

  // Handle loading state outside of hook calls
  if (isAdminLoading) {
    return <p>Loading...</p>;
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b-[1px] border-b-smooth bg-secondary-mode-bg rounded-b-lg">
      <div className="mx-auto max-w-[1300px] flex h-17 items-center justify-between px-4 md:px-6">
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

        <ul className="hidden md:flex space-x-6 text-text-color font-medium">
          <li>
            <Link
              href="/"
              className={`hover:text-primary transition ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/meals"
              className={`hover:text-primary transition ${
                pathname === "/meals" ? "text-primary" : ""
              }`}
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              href="/upcoming-meals"
              className={`hover:text-primary transition ${
                pathname === "/upcoming-meals" ? "text-primary" : ""
              }`}
            >
              UpComing Meals
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-primary transition ${
                pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-primary transition ${
                pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>
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

          {/* User Profile / Auth Actions */}
          <TooltipProvider>
            <DropdownMenu>
              {user ? (
                // Show Tooltip only if the user is logged in
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={user.photoURL || undefined}
                            alt={user.displayName || "User"}
                          />
                          <AvatarFallback>
                            {getInitials(user.displayName)}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    {user.displayName || "User Profile"}
                  </TooltipContent>
                </Tooltip>
              ) : (
                // No Tooltip when user is not logged in
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <CircleUser className="h-8 w-8 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
              )}

              <DropdownMenuContent align="end" className="w-56">
                {user ? (
                  <>
                    <div className="flex flex-col space-y-1 p-2">
                      <p className="text-sm font-medium leading-none">
                        {user.displayName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    <DropdownMenuSeparator />

                    {/* Conditional rendering based on admin status */}
                    {isAdmin ? (
                      // Admin menu items
                      <DropdownMenuItem asChild>
                        <Link
                          href="/dashboard"
                          className="cursor-pointer flex items-center"
                        >
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                    ) : (
                      // Regular user menu items
                      <>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/profile"
                            className="cursor-pointer flex items-center"
                          >
                            <User className="mr-2 h-4 w-4" />
                            <span>My Profile</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/dashboard"
                            className="cursor-pointer flex items-center"
                          >
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={handleLogOut}
                      className="cursor-pointer"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link href="/signin">Sign in</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipProvider>

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

                {/* Mobile Auth Menu - Conditional based on user type */}
                {user && (
                  <>
                    <div className="h-px bg-border my-2" />

                    {/* Show different options for admin vs regular user */}
                    {isAdmin ? (
                      <>
                        <Link
                          href="/dashboard"
                          className="text-sm font-medium text-custom-primary"
                        >
                          Dashboard
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/profile"
                          className="text-sm font-medium text-custom-primary"
                        >
                          My Profile
                        </Link>
                        <Link
                          href="/dashboard"
                          className="text-sm font-medium text-custom-primary"
                        >
                          Dashboard
                        </Link>
                      </>
                    )}

                    <button
                      onClick={handleLogOut}
                      className="text-sm font-medium text-custom-primary text-left"
                    >
                      Log out
                    </button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
