"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  ShoppingBag,
  Bell,
  Utensils,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const AdminDashboard = () => {
  const weeklyMealData = [
    { name: "Monday", breakfast: 150, lunch: 200, dinner: 180, total: 530 },
    { name: "Tuesday", breakfast: 170, lunch: 220, dinner: 190, total: 580 },
    { name: "Wednesday", breakfast: 180, lunch: 240, dinner: 220, total: 640 },
    { name: "Thursday", breakfast: 190, lunch: 230, dinner: 210, total: 630 },
    { name: "Friday", breakfast: 210, lunch: 260, dinner: 240, total: 710 },
    { name: "Saturday", breakfast: 160, lunch: 190, dinner: 170, total: 520 },
    { name: "Sunday", breakfast: 140, lunch: 180, dinner: 160, total: 480 },
  ];

  const monthlySalesData = [
    { name: "Jan", sales: 18000 },
    { name: "Feb", sales: 22000 },
    { name: "Mar", sales: 24389 },
  ];

  return (
    <div className=" w-full bg-accent">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="h-16 px-6 flex items-center justify-between">
          {/* <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary"></h1>
          </div> */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
            </Button>

            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
                {/* <AvatarFallback>
                  
                </AvatarFallback> */}
              </Avatar>
              {/* <div className="ml-2">
                <p className="text-sm font-medium dark:text-white">
                 
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="w-full overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold dark:text-white">
            Dashboard Overview
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold dark:text-white">2,845</div>
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-green-500 mt-2 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Meal Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold dark:text-white">1,253</div>
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-green-500 mt-2 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +5.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Orders Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold dark:text-white">384</div>
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-green-500 mt-2 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +18.3% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Revenue (Monthly)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold dark:text-white">
                  $24,389
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-green-500 mt-2 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +8.7% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="w-full">
            <CardHeader className="border-b pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Monthly Revenue</CardTitle>
                <Button variant="outline" size="sm" className="text-xs">
                  <span>This Quarter</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlySalesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        borderColor: "#374151",
                        color: "#F9FAFB",
                      }}
                    />
                    <Bar dataKey="sales" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader className="border-b pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Weekly Meal Analytics</CardTitle>
                <Button variant="outline" size="sm" className="text-xs">
                  <span>This Week</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyMealData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        borderColor: "#374151",
                        color: "#F9FAFB",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="breakfast"
                      stroke="#ff8042"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="lunch"
                      stroke="#0088fe"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="dinner"
                      stroke="#00C49F"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Upcoming Meals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="w-full h-full">
            <CardHeader className="border-b pb-3">
              <CardTitle className="text-lg">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y dark:divide-gray-700">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li
                    key={item}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/20 text-primary">
                            {item % 3 === 0
                              ? "JD"
                              : item % 2 === 0
                              ? "SM"
                              : "KP"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <p className="text-sm font-medium dark:text-white">
                            {item % 3 === 0
                              ? "New user registered"
                              : item % 2 === 0
                              ? "Meal plan updated"
                              : "Order completed"}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item % 3 === 0
                              ? "John Doe"
                              : item % 2 === 0
                              ? "Breakfast Plan"
                              : "Order #12345"}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item % 3 === 0
                          ? "5 mins ago"
                          : item % 2 === 0
                          ? "2 hours ago"
                          : "Yesterday"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Upcoming Meals */}
          <Card className="w-full h-full">
            <CardHeader className="border-b pb-3">
              <CardTitle className="text-lg">Upcoming Meals</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y dark:divide-gray-700">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li
                    key={item}
                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium dark:text-white">
                          {item % 3 === 0
                            ? "Chicken Biryani"
                            : item % 2 === 0
                            ? "Vegetable Pasta"
                            : "Fish & Chips"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item % 3 === 0
                            ? "Lunch"
                            : item % 2 === 0
                            ? "Dinner"
                            : "Breakfast"}{" "}
                          • {item * 75 + 40} orders
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium dark:text-white">
                          {item % 3 === 0
                            ? "Today"
                            : item % 2 === 0
                            ? "Tomorrow"
                            : "Mar 20"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item % 3 === 0
                            ? "12:30 PM"
                            : item % 2 === 0
                            ? "7:00 PM"
                            : "8:00 AM"}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
