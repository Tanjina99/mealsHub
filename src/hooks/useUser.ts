import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

// Define proper types
interface User {
  _id: string;
  email: string;
  displayName?: string;
  // Add other user fields as needed
}

interface ApiResponse {
  count: number;
  data: User[];
}

const useUser = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  const fetchUserData = async () => {
    if (!user?.email) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.get(
        `https://dorm-dine-hub-server.vercel.app/users?email=${user.email}`
      );

      // Handle the response format properly
      const responseData = res.data as ApiResponse;
      console.log(responseData);

      // Only store the users array, not the whole response object
      setUserData(responseData.data || []);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setUserData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user?.email]);

  const refetch = async () => {
    await fetchUserData();
  };

  return { userData, refetch, isLoading };
};

export default useUser;
