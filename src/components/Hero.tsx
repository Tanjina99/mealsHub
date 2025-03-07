import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className=" w-full max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 min-h-screen">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-text-color mb-4">
          Delicious <span className="text-primary">Meals</span>,{" "}
          <span className="text-primary">Delivered</span> to You
        </h2>

        <p className="text-lg md:text-xl text-text-color max-w-lg mb-4">
          Enjoy fresh, restaurant-quality meals at your doorstep. Order now and
          indulge in a delightful experience!
        </p>

        <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
          Order Now
        </Button>
      </div>

      {/* Image section */}
      <div className="md:w-1/2 w-full mt-4 md:mt-0 flex justify-center items-center">
        <div className="relative w-full h-[400px] md:h-[500px]">
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
