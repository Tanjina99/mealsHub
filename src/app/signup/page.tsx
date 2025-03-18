"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAuth from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

// Image hosting API (you'll need to set this up)
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;

// Define validation schema using zod
const formSchema = z.object({
  name: z.string().min(1, "Full name is required."),
  image: z.string().url("Please enter a valid URL."),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  photo: z.any().optional(), // For file uploads
});

export default function Signup() {
  // Get auth functions from custom hook
  const { createUser, updateUserProfile, logOut } = useAuth();
  const router = useRouter();

  // Initialize form with zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      email: "",
      password: "",
    },
  });

  // Define submit handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Create user with Firebase
      const result = await createUser(data.email, data.password);
      const user = result.user;
      console.log(user);
      toast.success("Registration Successful");

      // Update user profile
      await updateUserProfile(data.name, data.image);
      toast.success("User Created Successfully");

      // Save user to your database
      const newUser = {
        name: data.name,
        email: data.email,
        image: data.image,
        badge: "Bronze",
        badge_image:
          "https://i.ibb.co/TrN8dFr/bronze-badge-removebg-preview.png",
      };

      await axios.post(
        "https://dorm-dine-hub-server.vercel.app/users",
        newUser
      );

      // Logout and redirect to login
      await logOut();
      router.push("/signin");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-secondary-mode-bg flex justify-center items-center">
      <div className="bg-accent p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-4xl font-semibold text-center text-text-color mb-6">
          Sign Up
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-color">Full Name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...field}
                      className="w-full p-3 border border-accent-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Photo URL Field */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-color">Photo URL</FormLabel>
                  <FormControl>
                    <input
                      type="url"
                      placeholder="Enter your photo URL"
                      {...field}
                      className="w-full p-3 border border-accent-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-color">Email</FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="w-full p-3 border border-accent-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-color">Password</FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="w-full p-3 border border-accent-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full bg-button-primary hover:bg-button-primary-hover text-base py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </Form>

        {/* Footer or Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-text-color">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
