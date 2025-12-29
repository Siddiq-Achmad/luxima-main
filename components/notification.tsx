import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./animate-ui/radix/dropdown-menu";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { NotificationList } from "./notification-list";
import { Badge } from "./ui/badge";

export default function Notifications() {
  const notification = [
    {
      title: "Code Review Ready",
      description: "Your pull request is ready for code review by the team.",
      avatar: "https://github.com/evilrabbit.png",
      user: "Natasha",
      time: "2 hours ago",
    },
    {
      title: "Dark",
      description: "Your pull request is ready for code review by the team.",
      avatar: "https://github.com/evilrabbit.png",
      user: "Fatur",
      time: "2 minutes ago",
    },
    {
      title: "System",
      description: "Your pull request is ready for code review by the team.",
      avatar: "https://github.com/Siddiq-Achmad.png",
      user: "Doni",
      time: "2 minutes ago",
    },
    {
      title: "Code Review Ready",
      description: "Your pull request is ready for code review by the team.",
      avatar: "https://github.com/evilrabbit.png",
      user: "Fajri",
      time: "5 hours ago",
    },
    {
      title: "Dark",
      description: "Your pull request is ready for code review by the team.",
      avatar: "https://github.com/Siddiq-Achmad.png",
      user: "Dina",
      time: "28 minutes ago",
    },
    {
      title: "System",
      description: "Your pull request is ready for code review by the team.",
      avatar: "https://github.com/Siddiq-Achmad.png",
      user: "Andhika",
      time: "16 minutes ago",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-svw max-w-sm lg:max-w-md">
        {notification.map((item, index) => (
          <DropdownMenuItem key={index}>
            <NotificationList
              title={item.title}
              description={item.description}
              avatar={item.avatar}
              user={item.user}
              time={item.time}
            />
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <Button className="w-full justify-center" variant={"outline"}>
            View all notifications{" "}
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
              {notification.length}
            </Badge>{" "}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
