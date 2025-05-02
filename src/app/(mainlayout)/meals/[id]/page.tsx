"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TMeal, MealReview } from "@/types";
import ReviewCard from "@/components/review-card/ReviewCard";
import ReviewDialog from "@/components/review-card/ReviewDialog";
import { Rating } from "@smastrom/react-rating";
import { useParams } from "next/navigation";

// For client components, use hooks to access params
const SingleMealPage = () => {
  // Use the useParams hook to get the id parameter
  const params = useParams();
  const mealId = params.id as string;

  const [meal, setMeal] = useState<TMeal | null>(null);
  const [reviews, setReviews] = useState<MealReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://dorm-dine-hub-server.vercel.app/meals/${mealId}`
        );

        if (response.ok) {
          const data = await response.json();
          setMeal(data);
          setReviews(data.reviews || []);
        } else {
          console.error("Failed to fetch meal data");
        }
      } catch (error) {
        console.error("Error fetching meal data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [mealId]);

  const handleReviewSubmitted = (newReview: MealReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const openReviewDialog = () => {
    setIsReviewDialogOpen(true);
  };

  const closeReviewDialog = () => {
    setIsReviewDialogOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
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
      {/* Back Button */}
      <Link
        href="/meals"
        className="inline-flex items-center text-primary hover:text-button-primary-hover mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to All Meals
      </Link>

      {/* Meal Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={meal.mealImage}
              alt={meal.mealTitle}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2 text-base bg-button-primary p-2 rounded-full hover:bg-button-primary-hover cursor-pointer">
              <Heart size={20} />
            </div>
          </div>
        </div>

        {/* Meal Details */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-text-color">
                {meal.mealTitle}
              </h1>
              <div className="flex items-center bg-primary/30 px-3 py-1 rounded-full space-x-1">
                <span className="text-sm text-text-color">
                  ({meal.rating.toFixed(1)})
                </span>
                <Rating
                  value={parseFloat(meal.rating.toFixed(1))}
                  readOnly
                  style={{ maxWidth: 60 }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="text-lg text-text-color">{meal.mealType}</span>
              <span className="text-2xl font-bold text-primary">
                ${meal.price.toFixed(2)}
              </span>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-text-color">{meal.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <div className="flex flex-wrap gap-2">
                {meal.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-accent px-3 py-1 rounded-full text-sm text-text-color"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Button className="w-full mt-8 bg-button-primary hover:bg-button-primary-hover text-base py-3 rounded-xl font-semibold transition-all">
            Request This Meal
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-text-color">
            Customer Reviews: {reviews.length}
          </h2>
          <Button
            className="bg-button-primary hover:bg-button-primary-hover text-base"
            onClick={openReviewDialog}
          >
            Add a Review
          </Button>
        </div>

        {/* Render Reviews */}
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review._id} id={review._id} />
            ))}
          </div>
        )}
      </div>

      {/* Review Dialog */}
      <ReviewDialog
        mealId={mealId}
        mealTitle={meal.mealTitle}
        isOpen={isReviewDialogOpen}
        onClose={closeReviewDialog}
        onReviewSubmitted={handleReviewSubmitted}
        meal={meal}
      />
    </div>
  );
};

export default SingleMealPage;