import { MealReview } from "@/types";
import { Card } from "../ui/card";

const ReviewCard = ({ review }: { review: MealReview }) => {
  return (
    <Card className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={review.image}
          alt="Meal Review"
          className="w-full h-56 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded-full">
          {review.user_rating}★
        </div>
      </div>

      {/* Review Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
        <p className="text-gray-600 mt-2">{review.comment}</p>
      </div>

      {/* Rating Section */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-b-lg">
        <span className="text-sm text-gray-500">
          Rating: {review.user_rating}★
        </span>
      </div>
    </Card>
  );
};

export default ReviewCard;
