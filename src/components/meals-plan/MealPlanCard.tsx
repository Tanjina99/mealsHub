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
import { Check } from "lucide-react";

const MealPlanCard = ({ plan }: MealPlanCardProps) => {
  return (
    <Card className="shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 relative">
      <CardContent className="text-center pt-16">
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
            <div className="text-text-color text-center"> {plan.icon}</div>
          </div>

          <CardTitle className="text-xl font-semibold mt-2">
            {plan.name}
          </CardTitle>
        </div>
        <CardDescription className="text-text-color text-sm mb-4 text-center">
          {plan.description}
        </CardDescription>

        <p className="text-lg font-bold mb-4">{plan.price}</p>

        {/* Display the benefits */}
        <div className="text-center">
          <ul className="list-none pl-5 space-y-2 h-[130px]">
            {plan.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-text-color"
              >
                <Check className="w-4 h-4 text-yellow-500 mr-2" /> {benefit}
              </li>
            ))}
          </ul>
        </div>
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
