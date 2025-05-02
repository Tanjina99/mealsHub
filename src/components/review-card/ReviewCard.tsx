// import { MealReview } from "@/types";
// import { Card } from "../ui/card";

// const ReviewCard = ({ review }: { review: MealReview }) => {

//   return (
//     <Card className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="relative">
//         <img
//           src={review.image}
//           alt="Meal Review"
//           className="w-full h-56 object-cover rounded-t-lg"
//         />
//         <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded-full">
//           {review.user_rating}★
//         </div>
//       </div>

//       {/* Review Content Section */}
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
//         <p className="text-gray-600 mt-2">{review.comment}</p>
//       </div>

//       {/* Rating Section */}
//       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-b-lg">
//         <span className="text-sm text-gray-500">
//           Rating: {review.user_rating}★
//         </span>
//       </div>
//     </Card>
//   );
// };

// export default ReviewCard;

import { MealReview } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { Heart } from "lucide-react";

const ReviewCard = ({ id }: { id: string }) => {
  const [reviews, setReviews] = useState<MealReview[]>([]);
  const [visibleReviews, setVisibleReviews] = useState(5);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(
        `https://dorm-dine-hub-server.vercel.app/reviews?id=${id}`
      );
      setReviews(response.data.data);
    };
    fetchReviews();
  }, [id]);

  const handleLoadMore = () => {
    setVisibleReviews(reviews.length); // Show all reviews when clicked
  };

  return (
    <div className="py-8 space-y-8">
      <h2 className="text-2xl font-bold text-text-color mb-6">
        Customer Reviews
      </h2>

      {reviews.slice(0, visibleReviews).map((review, index) => (
        <div
          key={index}
          className="border-l-4 border-primary pl-6 mb-8 hover:border-primary-dark transition-colors duration-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                <Image
                  src={review.image || "/api/placeholder/100/100"}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-text-color">
                  {review.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-shrink-0">
                    <Rating
                      value={review.user_rating}
                      readOnly
                      style={{ maxWidth: 100 }}
                    />
                  </div>
                  <span className="text-sm text-text-color">
                    ({review.user_rating.toFixed(1)})
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 px-3 py-1 bg-primary/30 rounded-full transition-colors text-sm">
                <Heart
                  size={16}
                  className={`${
                    review.likes ? "text-primary fill-none" : "text-text-color"
                  }`}
                />
                <span className="text-text-color">{review.likes}</span>
              </button>
              {/* <span className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span> */}
            </div>
          </div>

          <div className="mt-4 ml-16">
            <p className="text-text-color leading-relaxed">{review.comment}</p>
            <div className="mt-3 flex gap-2">
              <span className="inline-block px-3 py-1 bg-accent text-text-color rounded-full text-xs">
                Verified Purchase
              </span>
              {index % 2 === 0 && (
                <span className="inline-block px-3 py-1 bg-primary text-accent rounded-full text-xs">
                  Recommended
                </span>
              )}
            </div>
          </div>

          {index !== Math.min(visibleReviews, reviews.length) - 1 && (
            <div className="border-b border-gray-100 my-8"></div>
          )}
        </div>
      ))}

      {/* Only show the Load More button if there are more reviews to load */}
      {visibleReviews < reviews.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-gray-700 font-medium"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
