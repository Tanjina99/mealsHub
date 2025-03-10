import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-light-mode-bg w-full h-screen flex flex-col md:flex-row items-center px-6 md:px-12">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-text-color mb-6">
          Delicious <span className="text-primary">Meals</span>,{" "}
          <span className="text-primary">Delivered</span> to You
        </h2>
        <p className="text-lg md:text-xl text-text-color max-w-lg mb-6">
          Enjoy fresh, restaurant-quality meals at your doorstep. Order now and
          indulge in a delightful experience!
        </p>
        <Button className="mt-4 bg-button-primary hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
          Order Now
        </Button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center h-full">
        <div className="relative w-full h-[60vh] md:h-[70vh]">
          <Image
            src="https://www.pngall.com/wp-content/uploads/8/Recipe-PNG-High-Quality-Image.png"
            alt="Delicious Meal"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
