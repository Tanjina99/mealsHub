import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <section className="bg-secondary-mode-bg py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="w-full md:w-1/2 relative">
          <Image
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/salmon-1.jpg"
            alt="Healthy Meal"
            width={500}
            height={600}
            className="rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-button-primary text-white px-4 py-2 rounded-lg shadow-md">
            Fresh & Healthy
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex justify-start mb-16">
            <h2 className="text-3xl font-bold text-text-color uppercase tracking-wide pb-2 inline-block relative -mt-2">
              About Our{" "}
              <span className="text-primary border-b-4 border-button-primary-hover">
                Meal Plans
              </span>
            </h2>
          </div>

          <p className="text-text-color mb-6 leading-relaxed">
            Our meal plans are designed to provide **delicious, healthy, and
            nutritious meals** that cater to different lifestyles. Whether
            you're looking for weight loss, muscle gain, or a balanced diet, we
            have something for you!
          </p>
          <ul className="text-text-color mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" /> Fresh, locally sourced
              ingredients
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" /> Customizable meal plans
              for different needs
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" /> Delivered straight to
              your doorstep
            </li>
          </ul>
          <Button className="mt-4 px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
