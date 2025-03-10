import { TMeal } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Heart } from "lucide-react";

const MealsCard = ({ meal }: { meal: TMeal }) => {
  console.log(meal);
  return (
    <Card className="max-w-sm shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
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

          {/* Heart Icon  */}
          <div className="absolute top-2 right-2 text-white bg-yellow-500 p-2 rounded-full hover:bg-yellow-800 cursor-pointer">
            <Heart size={20} />
          </div>
        </div>

        {/* Meal Info */}
        <div className="p-4">
          {/* Meal Title & Rating - Side by Side */}
          <div className="flex justify-between items-center space-x-2">
            <h1 className="text-lg font-semibold text-text-color truncate">
              {meal.mealTitle}
            </h1>
            <Rating style={{ maxWidth: 80 }} value={Math.ceil(meal.rating)} />
          </div>

          {/* Meal Type & Price - Side by Side */}
          <div className="flex justify-between items-center mt-3">
            <p className="text-md text-text-color">{meal.mealType}</p>
            <p className="text-md font-bold text-primary">${meal.price}</p>
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
