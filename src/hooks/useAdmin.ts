import { useState, useEffect } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [adminUsers, setAdminUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading) return; // Wait until auth loading is complete
    if (!user) {
      setAdminUsers([]);
      setIsLoading(false);
      return;
    }

    let isMounted = true; // To avoid setting state on unmounted component

    setIsLoading(true);
    fetch("https://dorm-dine-hub-server.vercel.app/users?role=admin")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch admin users");
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) setAdminUsers(data.data);
      })
      .catch((err) => {
        console.error("Error fetching admin users:", err);
        if (isMounted) setAdminUsers([]);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false; // Cleanup function to avoid memory leaks
    };
  }, [user, loading]); // Depend on user and loading to refetch when they change

  return [adminUsers, isLoading];
};

export default useAdmin;
