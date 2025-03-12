import { UpcomingMeal } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

interface MealCardProps {
  meal: UpcomingMeal;
}

const UpcomingMealsCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <Card className="w-full h-[555px] flex flex-col overflow-hidden shadow-lg rounded-xl">
      <CardHeader className="p-0 h-48 flex-shrink-0">
        <Image
          src={meal.mealImage}
          alt={meal.mealTitle}
          width={700}
          height={900}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </CardHeader>
      <CardContent className="p-5 flex-grow overflow-hidden">
        <div className="mb-3">
          <CardTitle className="text-xl font-bold text-text-color truncate">
            {meal.mealTitle}
          </CardTitle>
          <CardDescription className="text-sm font-medium text-text-color mt-1">
            {meal.mealType}
          </CardDescription>
        </div>
        <p className="text-text-color text-sm italic line-clamp-2 mb-3">
          {meal.description}
        </p>
        <div className="overflow-y-auto max-h-[160px] pr-2">
          <ul className="space-y-1 text-sm text-text-color">
            {meal.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-primary flex-shrink-0">
                  <Check size={16} />
                </span>
                <span className="truncate">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-5 border-t flex-shrink-0 mt-auto">
        <span className="text-lg font-bold text-primary">${meal.price}</span>
        <div className="flex items-center space-x-1">
          <Rating style={{ maxWidth: 100 }} value={meal.rating} readOnly />
        </div>
      </CardFooter>
    </Card>
  );
};

export default UpcomingMealsCard;
