import React from "react";
import { Truck, MapPin, Award, ArrowLeftRight } from "lucide-react";

const ServiceSection = () => {
  return (
    <section className="py-8 bg-secondary-mode-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <span className="text-primary font-semibold text-xs">
            WHAT WE OFFER
          </span>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold uppercase tracking-wide inline-block relative">
              Our{" "}
              <span className="text-primary border-b-4 border-yellow-400 pb-1">
                Premium Services
              </span>
            </h2>
          </div>

          <p className="text-text-co text-xs max-w-xl mx-auto">
            Experience the best food delivery service in town
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 ">
          {/* Fast Food Delivery Service */}
          <div className="bg-background rounded-lg shadow p-3 border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
            <div className="flex justify-center mb-2">
              <div className="bg-orange-100 p-2 rounded-full relative overflow-hidden group-hover:bg-orange-200 transition-all duration-500">
                <Truck className="w-5 h-5 text-orange-500 group-hover:text-orange-600 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
              </div>
            </div>
            <h3 className="text-text-color font-semibold text-center text-sm mb-1 group-hover:text-orange-600 transition-colors duration-300">
              Fast Food Delivery
            </h3>
            <p className="text-text-color text-center text-xs leading-tight">
              Get your favorite meals delivered quickly within minutes.
            </p>
          </div>

          {/* Live Order Tracking Service */}
          <div className="bg-background rounded-lg shadow p-3 border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
            <div className="flex justify-center mb-2">
              <div className="bg-blue-100 p-2 rounded-full relative overflow-hidden group-hover:bg-blue-200 transition-all duration-500">
                <MapPin className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-all duration-700 group-hover:animate-pulse" />
              </div>
            </div>
            <h3 className="text-text-color font-semibold text-center text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
              Live Order Tracking
            </h3>
            <p className="text-center text-xs leading-tight">
              Track your order in real-time from kitchen to location.
            </p>
          </div>

          {/* Best Food Quality Service */}
          <div className="bg-background rounded-lg shadow p-3 border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
            <div className="flex justify-center mb-2">
              <div className="bg-green-100 p-2 rounded-full relative overflow-hidden group-hover:bg-green-200 transition-all duration-500">
                <Award className="w-5 h-5 text-green-500 group-hover:text-green-600 transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
            <h3 className="text-text-color font-semibold text-center text-sm mb-1 group-hover:text-green-600 transition-colors duration-300">
              Best Food Quality
            </h3>
            <p className="text-text-color text-center text-xs leading-tight">
              Premium quality ingredients from top restaurants.
            </p>
          </div>

          {/* Easy Return Policy */}
          <div className="bg-background rounded-lg shadow p-3 border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
            <div className="flex justify-center mb-2">
              <div className="bg-purple-100 p-2 rounded-full relative overflow-hidden group-hover:bg-purple-200 transition-all duration-500">
                <ArrowLeftRight className="w-5 h-5 text-purple-500 group-hover:text-purple-600 transition-transform duration-700 group-hover:translate-x-1" />
              </div>
            </div>
            <h3 className="text-text-color font-semibold text-center text-sm mb-1 group-hover:text-purple-600 transition-colors duration-300">
              Easy Return Policy
            </h3>
            <p className="text-text-color text-center text-xs leading-tight">
              Hassle-free returns for quality food only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
