import { AuthContext } from "@/AuthProvider/AuthProvider";
import { useContext } from "react";
import { User } from "firebase/auth";

// Define the type for the auth context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  googleSignIn: () => Promise<any>;
  logOut: () => Promise<void>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
}

const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);
  
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return auth;
};

export default useAuth;