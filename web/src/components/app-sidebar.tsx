import { Home, ListTodo } from "lucide-react";

import logo from "@/assets/logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { paths } from "@/config/paths";
import { useLocation } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Home",
    url: paths.app.dashboard.getHref(),
    icon: Home,
  },
  {
    title: "Tasks",
    url: paths.app.tasks.getHref(),
    icon: ListTodo,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader>
        <a href="#" className="font-bold text-xl flex items-center gap-2">
          <img src={logo} alt="logo" className="h-6" />
          <span>Taskify</span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.url}
              >
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
