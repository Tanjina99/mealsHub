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
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import Lottie from "lottie-react";
import login from "../../../public/login.json";

// Define validation schema using zod
const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export default function Signin() {
  const router = useRouter();
  const { signIn, googleSignIn } = useAuth();
  // 1. Use react-hook-form with zod validation.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signIn(values.email, values.password).then((res) => {
      console.log(res);
      toast.success("Login Successful");
      router.push("/");
    });
  }

  //gogolesign in
  const handleSocial = async (provider: any) => {
    await provider().then((res: any) => {
      // console.log(res);
      toast.success("Login Successful");

      const newUser = {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
        badge: "Bronze",
        badge_image:
          "https://i.ibb.co/TrN8dFr/bronze-badge-removebg-preview.png",
      };

      axios
        .get(
          `https://dorm-dine-hub-server.vercel.app/users?email=${res.user.email}`
        )
        .then((response) => {
          // console.log(response);
          if (response.data.data.length === 0) {
            axios
              .post("https://dorm-dine-hub-server.vercel.app/users", newUser)
              .then((response) => {
                console.log(response);
              });
          }
        });
      router.push("/");

      // Update user profile
    });
  };

  return (
    <div className="min-h-screen bg-secondary-mode-bg flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-accent p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center">
        {/* Animation Section */}
        <div className="hidden md:flex justify-center items-center w-1/2">
          <Lottie
            animationData={login}
            loop
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-center text-text-color mb-6">
            Login
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  Login
                </Button>
              </div>
            </form>
          </Form>

          {/* Google Sign-In */}
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => console.log("Google Sign In")}
              className="flex items-center space-x-3 px-5 py-2 bg-base border border-base rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <span className="text-text-color font-medium">
                Continue with Google
              </span>
            </Button>
          </div>

          {/* Footer Links */}
          <div className="mt-4 text-center">
            <p className="text-sm text-text-color">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
