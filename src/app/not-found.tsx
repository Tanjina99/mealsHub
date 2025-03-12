"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <Image
        src="https://www.sehgalneohospital.com/images/404-error-page.png"
        alt="Page Not Found"
        width={400}
        height={300}
        className="w-72 md:w-80 lg:w-96 mb-6"
      />

      <h2 className="text-2xl font-semibold text-gray-800 mt-4 md:text-3xl">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 text-center mt-2 max-w-md md:text-lg">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" passHref>
        <Button
          variant="default"
          size="lg"
          className="mt-6 cursor-pointer bg-yellow-500 hover:bg-yellow-600"
        >
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
