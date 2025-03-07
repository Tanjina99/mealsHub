import MealPlanCard from "./MealPlanCard";

const mealPlans = [
  {
    name: "Daily Plan",
    price: "$12.99",
    description: "Get fresh meals delivered every day.",
    image:
      "https://static.vecteezy.com/system/resources/previews/017/177/791/large_2x/round-check-mark-symbol-with-transparent-background-free-png.png",
  },
  {
    name: "Weekly Plan",
    price: "$69.99",
    description: "Enjoy a week's worth of healthy meals.",
    image: "https://cdn-icons-png.flaticon.com/512/6117/6117202.png",
  },
  {
    name: "Monthly Plan",
    price: "$249.99",
    description: "Save and get meals for the whole month.",
    image:
      "https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-schedule-clock-and-calendar-png-image_5262010.png",
  },
];

const MealPlans = () => {
  return (
    <section className="py-16 bg-gray-100 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14 text-text-color">
          Choose Your Meal Plan
        </h2>
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
