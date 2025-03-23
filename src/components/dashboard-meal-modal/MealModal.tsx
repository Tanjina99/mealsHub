import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TMeal } from "@/types";
import axios from "axios";
import toast from "react-hot-toast";

const MealEditModal = ({ mealId, isOpen, onClose, onUpdate }) => {
  const [meal, setMeal] = useState<TMeal | null>(null);
  const [formData, setFormData] = useState({
    mealTitle: "",
    mealType: "",
    price: "",
    rating: "",
    likes: "",
    reviews: "",
  });

  useEffect(() => {
    if (mealId && isOpen) {
      const fetchMeal = async () => {
        const response = await fetch(
          `https://dorm-dine-hub-server.vercel.app/meals/${mealId}`
        );
        const data = await response.json();
        setMeal(data);
        setFormData({
          mealTitle: data.mealTitle,
          mealType: data.mealType,
          price: (Number(data.price) || 0).toFixed(2),
          rating: data.rating,
          likes: data.likes,
          reviews: data.reviews,
        });
      };

      fetchMeal();
    }
  }, [mealId, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://dorm-dine-hub-server.vercel.app/meals/${mealId}`, formData)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          onUpdate(mealId, formData);
          onClose();
          toast.success("Meal updated successfully!");
        } else {
          toast.error("No changes made to the meal.");
        }
      })
      .catch((err) => {
        console.error("Error updating meal:", err);
        toast.error("Failed to update meal.");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 bg-secondary-mode-bg rounded-lg shadow-lg space-y-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Edit Meal</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-4">
          {meal ? (
            <form
              onSubmit={handleSubmit}
              id="mealEditForm"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label
                  htmlFor="mealTitle"
                  className="block text-sm font-medium text-text-color"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="mealTitle"
                  name="mealTitle"
                  value={formData.mealTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="mealType"
                  className="block text-sm font-medium text-text-color"
                >
                  Type
                </label>
                <input
                  type="text"
                  id="mealType"
                  name="mealType"
                  value={formData.mealType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-text-color"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-text-color"
                >
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="likes"
                  className="block text-sm font-medium text-text-color"
                >
                  Likes
                </label>
                <input
                  type="number"
                  id="likes"
                  name="likes"
                  value={formData.likes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="reviews"
                  className="block text-sm font-medium text-text-color"
                >
                  Reviews
                </label>
                <input
                  type="number"
                  id="reviews"
                  name="reviews"
                  value={formData.reviews}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <DialogFooter className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="px-6 py-2 text-sm"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-6 py-2 text-sm bg-primary text-white hover:bg-primary-dark"
                >
                  Save
                </Button>
              </DialogFooter>
            </form>
          ) : (
            <div>Loading meal data...</div>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default MealEditModal;
