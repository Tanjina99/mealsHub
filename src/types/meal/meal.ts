import { JSX } from "react";

export type TMeal = {
  _id: string;
  mealTitle: string;
  mealType: string;
  mealImage: string;
  ingredients: string[];
  description: string;
  price: number;
  rating: number;
  timeDate: string; // You might use Date if you're working with actual Date objects.
  likes: number;
  reviews: number;
  adminName: string;
  admin_Email: string;
  liked: (boolean | string)[]; // Array that contains boolean and string values (user email addresses).
};

export type MealPlan = {
  name: string;
  price: string;
  description: string;
  icon: JSX.Element;
  benefits: string[];
};

export type MealPlanCardProps = {
  plan: MealPlan;
};
