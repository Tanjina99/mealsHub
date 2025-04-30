"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { TMeal } from "@/types";
import MealEditModal from "@/components/dashboard-meal-modal/MealModal";
import { Rating } from "@smastrom/react-rating";
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

const MealManagementTable = () => {
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(10);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMeals = () => {
      axios
        .get("https://dorm-dine-hub-server.vercel.app/meals")
        .then((response) => {
          setMeals(response.data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMeals();
  }, []);

  const handleDelete = (id: any) => {
    if (window.confirm("Are you sure you want to delete this meal?")) {
      fetch(`https://dorm-dine-hub-server.vercel.app/meals/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete meal");
          }
          setMeals(meals.filter((meal) => meal._id !== id));
        })
        .catch(() => {
          toast.error("Failed to delete meal");
        });
    }
  };

  const handleUpdate = (id: any) => {
    setSelectedMealId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleMealUpdate = (mealId, updatedData) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal._id === mealId ? { ...meal, ...updatedData } : meal
      )
    );
  };

  // Pagination logic
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);
  const totalPages = Math.ceil(meals.length / mealsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Generate page numbers array for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      // If 5 or fewer pages, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include page 1
      pageNumbers.push(1);

      // Handle different pagination scenarios
      if (currentPage <= 3) {
        // If near the start, show first 4 pages and ellipsis
        pageNumbers.push(2, 3, 4);
        pageNumbers.push("ellipsis");
      } else if (currentPage >= totalPages - 2) {
        // If near the end, show ellipsis and last 4 pages
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages - 3, totalPages - 2, totalPages - 1);
      } else {
        // In the middle, show ellipsis, current page and adjacent pages, and ellipsis
        pageNumbers.push("ellipsis");
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
        pageNumbers.push("ellipsis");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center mt-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableCaption>A list of all available meals</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Reviews</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentMeals.map((meal) => (
            <TableRow key={meal._id}>
              <TableCell>
                <Image
                  src={meal.mealImage}
                  alt={meal.mealTitle}
                  height={1300}
                  width={1400}
                  className="w-16 h-16 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{meal.mealTitle}</TableCell>
              <TableCell>{meal.mealType}</TableCell>
              <TableCell>${meal.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Rating value={meal.rating} readOnly />
                  <span className="ml-2">{meal.rating}⭐</span>
                </div>
              </TableCell>
              <TableCell>{meal.likes}</TableCell>
              <TableCell>{meal.reviews}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handleUpdate(meal._id)}
                  className="p-2"
                >
                  <Pencil size={16} />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDelete(meal._id)}
                  className="p-2"
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Component */}
      <div className="flex justify-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => paginate(currentPage - 1)}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {getPageNumbers().map((pageNumber, index) =>
              pageNumber === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => paginate(pageNumber)}
                    isActive={currentPage === pageNumber}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => paginate(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Meal Edit Modal */}
      <MealEditModal
        mealId={selectedMealId}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onUpdate={handleMealUpdate}
      />
    </div>
  );
};

export default MealManagementTable;
