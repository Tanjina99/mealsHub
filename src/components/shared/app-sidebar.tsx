import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "All Meals",
    url: "/dashboard/all-meals",
    icon: Inbox,
  },
  {
    title: "All Reviews",
    url: "/dashboard/all-reviews",
    icon: Calendar,
  },
  {
    title: "Upcoming Meals",
    url: "/dashboard/upcoming-meals",
    icon: Search,
  },
  {
    title: "User Profile",
    url: "#",
    icon: Settings,
  },
  {
    title: "User Reviews",
    url: "#",
    icon: Settings,
  },
  {
    title: "User Profile",
    url: "#",
    icon: Settings,
  },
  {
    title: "Admin Profile",
    url: "#",
    icon: Settings,
  },
  {
    title: "Add Meal",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
