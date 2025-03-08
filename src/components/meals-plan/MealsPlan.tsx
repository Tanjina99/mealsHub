import MealPlanCard from "./MealPlanCard";
import { Award, Trophy, Crown } from "lucide-react";

const mealPlans = [
  {
    name: "Silver Plan",
    price: "$12.99",
    description:
      "Enjoy basic meal delivery with fresh, healthy meals delivered daily.",
    benefits: [
      "Fresh daily meals",
      "Standard delivery time",
      "Basic customer support",
    ],
    icon: <Award />,
  },
  {
    name: "Gold Plan",
    price: "$69.99",
    description:
      "Get premium meals with additional benefits for a week’s worth of healthy meals.",
    benefits: [
      "Fresh, nutritious meals delivered every day",
      "Priority delivery",
      "Enhanced customer support",
      "Weekly meal customization",
    ],
    icon: <Trophy />,
  },
  {
    name: "Platinum Plan",
    price: "$249.99",
    description:
      "The ultimate plan for a month’s worth of meals, with premium options and exclusive perks.",
    benefits: [
      "Fresh, gourmet meals delivered daily",
      "Priority delivery with express options",
      "24/7 customer support",
      "Weekly and monthly meal customization",
      "Exclusive recipe choices and discounts",
    ],
    icon: <Crown />,
  },
];

const MealPlans = () => {
  return (
    <section className="py-16 bg-custome-yellow">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl font-bold text-text-color uppercase tracking-wide pb-2 inline-block relative -mt-2">
            Choose Your{" "}
            <span className="text-primary border-b-4 border-yellow-400">
              Meal Plan
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mealPlans.map((plan, index) => (
            <MealPlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealPlans;
