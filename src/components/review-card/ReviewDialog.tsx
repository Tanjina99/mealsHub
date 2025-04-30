"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { X } from "lucide-react";
import { MealReview, TMeal } from "@/types";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

interface ReviewDialogProps {
  meal: TMeal;
  mealId: string;
  mealTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (review: MealReview) => void;
}

const ReviewDialog = ({
  meal,
  mealId,
  mealTitle,
  isOpen,
  onClose,
  onReviewSubmitted,
}: ReviewDialogProps) => {
  const { user } = useAuth();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [reviewFormData, setReviewFormData] = useState({
    name: user?.displayName || "",
    rating: 0,
    review: "",
  });

  // Update name field when user data loads
  useEffect(() => {
    if (user?.displayName) {
      setReviewFormData((prev) => ({ ...prev, name: user.displayName || "" }));
    }
  }, [user]);

  if (!isOpen) return null;

  const handleRatingChange = (value: number) => {
    setReviewFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reviewFormData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (reviewFormData.rating === 0) {
      toast.error("Please provide a rating");
      return;
    }

    if (!reviewFormData.review.trim()) {
      toast.error("Please write a review");
      return;
    }

    setSubmitLoading(true);

    const newReview: MealReview = {
      _id: "", // Assign a default or generated value if available
      __v: 0, // Assign a default value
      comment: reviewFormData.review,
      email: user?.email || "",
      food_id: mealId,
      image: user?.photoURL || "",
      likes: meal?.likes || 0,
      mealTitle: mealTitle,
      name: reviewFormData.name,
      reviews: meal?.reviews + 1,
      user_rating: reviewFormData.rating,
    };

    const response = await axios.post(
      "https://dorm-dine-hub-server.vercel.app/reviews",
      newReview
    );
    console.log(response);

    onReviewSubmitted(newReview);
    toast.success("Your review has been submitted!");

    setReviewFormData({
      name: user?.displayName || "guest",
      rating: 0,
      review: "",
    });

    onClose();
    setSubmitLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-primary/40 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-accent rounded-xl shadow-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Review {mealTitle}</h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-text-color mb-8">
          Share your experience with this meal. Your feedback helps others make
          better choices.
        </p>

        <form onSubmit={handleSubmitReview}>
          <div className="mb-6">
            <label className="block text-text-color mb-2 font-medium">
              Rating
            </label>
            <div className="max-w-[180px]">
              <Rating
                value={reviewFormData.rating}
                onChange={handleRatingChange}
                style={{ maxWidth: 180 }}
              />
              {reviewFormData.rating === 0 && (
                <p className="text-xs text-text-color mt-1">
                  Please select a rating
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-text-color mb-2 font-medium"
              htmlFor="review"
            >
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              value={reviewFormData.review}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 border border-accent-foreground rounded-lg focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant="outline"
              className="border-accent"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitLoading}
              className="bg-primary hover:bg-button-primary-hover text-base px-6"
            >
              {submitLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-primary mr-2"></div>
                  Submitting...
                </div>
              ) : (
                "Submit Review"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewDialog;
