import { TMeal } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
    <Card>
      <CardHeader>
        <CardTitle>{meal.mealTitle}</CardTitle>
        <CardDescription>{meal.mealType}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Image
            src={meal.mealImage}
            alt="meal image"
            width={300}
            height={200}
          />
        </div>
        <p>{meal.price}</p>
      </CardContent>
      <CardFooter>
        <Button>
          <Link href={`/meals/${meal._id}`}>View Meal</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealsCard;
