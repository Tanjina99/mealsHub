type Ingredient = string;

export interface UpcomingMeal {
  _id: string;
  mealTitle: string;
  mealType: string;
  mealImage: string;
  ingredients: Ingredient[];
  description: string;
  price: number;
  rating: number;
  timeDate: string;
  likes: number;
  reviews: number;
  adminName: string;
  admin_Email: string;
  liked?: string[];
}
