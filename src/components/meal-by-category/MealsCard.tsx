import { TMeal } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// {
//   "liked": [],
//   "_id": "656469e75d202cb0a72ca461",
//   "mealTitle": "Banana Walnut Pancakes",
//   "mealType": "Breakfast",
//   "mealImage": "https://www.shutterstock.com/image-photo/stack-oatmeal-banana-pancakes-slices-600nw-1931862263.jpg",
//   "ingredients": [
//       "Pancake mix",
//       "Bananas",
//       "Walnuts",
//       "Maple syrup"
//   ],
//   "description": "Treat yourself to Banana Walnut Pancakes, featuring fluffy pancakes studded with ripe bananas and crunchy walnuts. Drizzled with rich maple syrup.",
//   "price": 9.49,
//   "rating": 4.3,
//   "timeDate": "2023-11-27T08:45:00.000Z",
//   "likes": 20,
//   "reviews": 8,
//   "adminName": "Shohaib",
//   "admin_Email": "mama@mami.com"
// }
const MealsCard = ({ meal }: { meal: TMeal }) => {
  console.log(meal);
  return (
    <Card className="max-w-sm bg-accent shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-0">
        {/* Meal Image */}
        <div className="relative w-full h-[250px]">
          <Image
            src={meal.mealImage}
            alt={meal.mealTitle}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meal Info */}
        <div className="p-4">
          <h1 className="text-lg font-semibold text-text-color">
            {meal.mealTitle}
          </h1>

          {/* Meal Type & Price - Side by Side */}
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm text-gray-500">{meal.mealType}</p>
            <p className="text-lg font-bold text-yellow-600">${meal.price}</p>
          </div>

          {/* Rating */}
          <div className="mt-2">
            <Rating style={{ maxWidth: 90 }} value={Math.ceil(meal.rating)} />
          </div>
        </div>
      </CardContent>

      {/* Footer Button */}
      <CardFooter className="p-4">
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-all">
          <Link href={`/meals/${meal._id}`} className="w-full text-center">
            View Meal
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealsCard;
