"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { TMeal } from "@/types";

const SingleMealPage = ({ params }: { params: { id: string } }) => {
  const [meal, setMeal] = useState<TMeal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        `https://dorm-dine-hub-server.vercel.app/meals/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setMeal(data);
      }
      setLoading(false);
    };

    // const fetchReviews = async () => {
    //   const response = await fetch(
    //     `https://dorm-dine-hub-server.vercel.app/reviews?id=${params.id}`
    //   );
    //   if (response.ok) {
    //     const data = await response.json();
    //     setReviews(data);
    //   }
    //   setReviewLoading(false);
    // };

    fetchMeal();
    // fetchReviews();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-primary">Meal not found</h1>
        <Link href="/meals" className="mt-4 text-primary hover:underline">
          Back to meals
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <Link
        href="/meals"
        className="inline-flex items-center text-primary hover:text-button-primary-hover mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to All Meals
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={meal.mealImage}
              alt={meal.mealTitle}
              fill
              className="object-cover"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <Heart size={24} className="text-yellow-500" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-text-color">
                {meal.mealTitle}
              </h1>
              <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                <Star size={18} className="text-yellow-500 mr-1" />
                <span className="font-medium">{meal.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="text-lg text-gray-600">{meal.mealType}</span>
              <span className="text-2xl font-bold text-yellow-500">
                ${meal.price.toFixed(2)}
              </span>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{meal.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <div className="flex flex-wrap gap-2">
                {meal.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Request Meal Button */}
          <Button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-lg font-semibold transition-all">
            Request This Meal
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

        {reviewLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-500"></div>
          </div>
        ) : reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={
                        review.userImage || "https://via.placeholder.com/100"
                      }
                      alt={review.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.userName}</h3>
                    <div className="flex items-center">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={review.rating}
                        readOnly
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.reviewText}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <p className="text-lg text-gray-600">
              No reviews yet for this meal.
            </p>
            <p className="mt-2">
              Be the first to try and review this delicious meal!
            </p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SingleMealPage;
