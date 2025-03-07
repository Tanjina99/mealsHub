import { Button } from "../ui/button";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { MealPlanCardProps } from "@/types";

const MealPlanCard = ({ plan }: MealPlanCardProps) => {
  return (
    <Card className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 relative">
      <CardHeader className="w-full h-5 mt-4 -mb-8 relative flex justify-center items-center p-4">
        <Image
          src={plan.image}
          alt={plan.name}
          layout="intrinsic"
          width={140}
          height={140}
          className="object-contain absolute top-[-80px] left-1/2 transform -translate-x-1/2"
        />
      </CardHeader>

      <CardContent className="text-center pt-16">
        <CardTitle className="text-xl font-semibold mb-2">
          {plan.name}
        </CardTitle>
        <CardDescription className="text-text-color text-sm mb-4">
          {plan.description}
        </CardDescription>
        <p className="text-lg font-bold mb-4">{plan.price}</p>
      </CardContent>

      <CardFooter>
        <Button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealPlanCard;
