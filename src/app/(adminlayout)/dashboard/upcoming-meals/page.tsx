import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UpcomingMeal } from "@/types";

const UpcomingMeals = async () => {
  const res = await fetch(
    "https://dorm-dine-hub-server.vercel.app/upcoming-meals"
  );
  const meals: UpcomingMeal[] = await res.json();

  // const handlePublish = (id) => {

  // };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">
          Upcoming Meals Ready for Publishing
        </h2>
      </div> */}

      <div className="overflow-x-auto">
        <Table>
          <TableCaption>
            A list of upcoming meals ready for publishing.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Meal Title</TableHead>
              <TableHead className="text-left">Likes</TableHead>
              <TableHead className="text-left">Admin Name</TableHead>
              <TableHead className="text-left">Meal Type</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meals.length > 0 ? (
              meals.map((meal) => (
                <TableRow key={meal._id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    {meal.mealTitle}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      {meal.likes}
                    </div>
                  </TableCell>
                  <TableCell>{meal.adminName}</TableCell>
                  <TableCell>{meal.mealType}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      // onClick={() => handlePublish(meal._id)}
                      className="bg-button-primary hover:bg-button-primary-hover text-text-color py-1 px-3 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none"
                    >
                      Publish
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-text-color">
                  No upcoming meals found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UpcomingMeals;
