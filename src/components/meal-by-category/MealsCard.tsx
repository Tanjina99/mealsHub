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
    <Card>
      {/* <CardHeader>
        <CardTitle>{meal.mealTitle}</CardTitle>
        <CardDescription>{meal.mealType}</CardDescription>
      </CardHeader> */}
      <CardContent>
        <div>
          <Image
            src={meal.mealImage}
            alt="meal image"
            width={300}
            height={200}
            className="w-[305px] rounded-2xl h-[250px] object-cover"
          />
        </div>
        <div className="px-3 py-3">
          <h1>{meal.mealTitle}</h1>
          <p>{meal.mealType}</p>
          <p>{meal.price}</p>
          <Rating style={{ maxWidth: 150 }} value={Math.ceil(meal.rating)} />
        </div>
      </CardContent>
      <CardFooter className="p-3">
        <Button>
          <Link href={`/meals/${meal._id}`}>View Meal</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealsCard;
