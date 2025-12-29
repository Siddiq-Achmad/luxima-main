"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuAction,
} from "@/components/animate-ui/radix/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/animate-ui/radix/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/animate-ui/radix/dropdown-menu";
import {
  Aperture,
  AudioWaveform,
  BadgeCheck,
  BarChart2,
  Bell,
  Building2,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  ExternalLink,
  Folder,
  Forward,
  Frame,
  Globe,
  LayoutDashboard,
  LogOut,
  Map,
  MoreHorizontal,
  Package,
  PieChart,
  Plus,
  Settings,
  ShieldCheck,
  Sparkles,
  Tag,
  Trash2,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

import { useUser } from "@/hooks/useUser";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


const DUMMYDATA = {
  user: {
    name: "admin",
    email: "admin@luxima.id",
    avatar:
      "https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg",
  },
  teams: [
    {
      name: "LUXIMA.ID",
      logo: Aperture,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: false,
      items: [
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
        {
          title: "Billing",
          url: "/dashboard/billing",
        },
        {
          title: "Business",
          url: "/dashboard/business",
        },
        {
          title: "Calendar",
          url: "/dashboard/calendar",
        },
        {
          title: "Invoices",
          url: "/dashboard/invoices",
        },
        {
          title: "Payments",
          url: "/dashboard/payments",
        },
      ],
    },
    {
      title: "User Management",
      url: "/users",
      icon: Users,
      items: [
        {
          title: "All Users",
          url: "/users",
        },
        {
          title: "Roles & Permissions",
          url: "/roles",
        },
      ],
    },
    {
      title: "Session & Package",
      url: "/session-types",
      icon: Package,
      items: [
        {
          title: "Session Types",
          url: "/session-types",
        },
        {
          title: "Packages",
          url: "/packages",
        },
      ],
    },
    {
      title: "Category",
      url: "/categories",
      icon: Tag,
      items: [
        {
          title: "Parent Categories",
          url: "/categories",
        },
        {
          title: "Brand Categories",
          url: "/categories/brand",
        },
        {
          title: "Blog Categories",
          url: "/categories/blog",
        },
        {
          title: "Vendor Categories",
          url: "/categories/vendor",
        },
      ],
    },
    {
      title: "Location",
      url: "/locations",
      icon: Globe,
      items: [
        {
          title: "Provinces",
          url: "/locations/provinces",
        },
        {
          title: "Regencies & Cities",
          url: "/locations/regencies",
        },
        {
          title: "Districts",
          url: "/locations/districts",
        },
        {
          title: "Villages",
          url: "/locations/villages",
        },
      ],
    },
    {
      title: "Organization",
      url: "/organizations",
      icon: Building2,
      items: [
        {
          title: "All Organizations",
          url: "/organizations",
        },
      ],
    },
    {
      title: "Tenants",
      url: "/tenants",
      icon: Building2,
      items: [
        {
          title: "All Tenants",
          url: "/tenants",
        },
        {
          title: "Add Tenant",
          url: "/tenants/add",
        }
      ],
    },
    {
      title: "Vendors",
      url: "/vendors",
      icon: Users,
      items: [
        {
          title: "All Vendors",
          url: "/vendors",
        },
        {
          title: "Vendor Types",
          url: "/vendors/types",
        },
        {
          title: "Products & Services",
          url: "/vendors/products",
        },
        {
          title: "Vendors Packages",
          url: "/vendors/packages",
        },
        {
          title: "Vendors Sessions",
          url: "/vendors/sessions",
        },
        {
          title: "Vendors Locations",
          url: "/vendors/locations",
        },
        {
          title: "Vendors Categories",
          url: "/vendors/categories",
        },
        {
          title: "Vendors Brands",
          url: "/vendors/brands",
        },
        {
          title: "Vendors Tags",
          url: "/vendors/tags",
        },
        {
          title: "Vendors Reviews",
          url: "/vendors/reviews",
        },
        {
          title: "Vendors Promotions",
          url: "/vendors/promotions",
        },
        {
          title: "Vendors Coupons",
          url: "/vendors/coupons",
        },
        {
          title: "Vendors Discounts",
          url: "/vendors/discounts",
        },
        {
          title: "Vendors Aggreements",
          url: "/vendors/aggreements",
        },
      ],
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
      items: [
        {
          title: "Internal Customers",
          url: "/customers/internal",
        },
        {
          title: "External Customers",
          url: "/customers/external",
        },
      ],
    },
    {
      title: "RBAC",
      url: "/rbac",
      icon: ShieldCheck,
      items: [
        {
          title: "Role Matrix",
          url: "/roles",
        },
        {
          title: "Permission Matrix",
          url: "/permissions",
        },
      ],
    },
    {
      title: "Security",
      url: "/security",
      icon: ShieldCheck,
      items: [
        {
          title: "User Management",
          url: "/users",
        },
        {
          title: "Roles & Permissions",
          url: "/roles",
        },
      ],
    },
    {
      title: "Monitoring",
      url: "/stats",
      icon: BarChart2,
      items: [
        {
          title: "Booking Stats",
          url: "/stats/bookings",
        },
        {
          title: "User Activity",
          url: "/stats/activities",
        },
        {
          title: "System Logs",
          url: "/stats/logs",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "Global Config",
          url: "/settings/global",
        },
      ],
    },
    {
      title: "Applications",
      url: "#",
      icon: ExternalLink,
      items: [
        {
          title: "Main App",
          url: "https://app.luxima.id",
        },
        {
          title: "Auth System",
          url: "https://auth.luxima.id",
        },
        {
          title: "API",
          url: "https://api.luxima.id",
        },
        {
          title: "Admin Panel",
          url: "https://admin.luxima.id",
        },
        {
          title: "Billing Panel",
          url: "https://billing.luxima.id",
        },
        {
          title: "Dashboard",
          url: "https://dash.luxima.id",
        },
        {
          title: "Documentation",
          url: "https://docs.luxima.id",
        },
        {
          title: "Website",
          url: "https://luxima.id",
        },
        {
          title: "Staging App",
          url: "https://staging.luxima.id",
        },
        {
          title: "Payments",
          url: "https://payments.luxima.id",
        },
        {
          title: "Supabase",
          url: "https://supabase.luxima.id",
        },
        {
          title: "Studio Bookings",
          url: "https://studio.luxima.id",
        },
        {
          title: "Coolify Panel",
          url: "https://coolify.luxima.id",
        },
      ],
    },
  ],
  // navMain: [
  //   {
  //     title: "Playground",
  //     url: "#",
  //     icon: SquareTerminal,
  //     isActive: true,
  //     items: [
  //       {
  //         title: "History",
  //         url: "#",
  //       },
  //       {
  //         title: "Starred",
  //         url: "#",
  //       },
  //       {
  //         title: "Settings",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Models",
  //     url: "#",
  //     icon: Bot,
  //     items: [
  //       {
  //         title: "Genesis",
  //         url: "#",
  //       },
  //       {
  //         title: "Explorer",
  //         url: "#",
  //       },
  //       {
  //         title: "Quantum",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Documentation",
  //     url: "#",
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: "Introduction",
  //         url: "#",
  //       },
  //       {
  //         title: "Get Started",
  //         url: "#",
  //       },
  //       {
  //         title: "Tutorials",
  //         url: "#",
  //       },
  //       {
  //         title: "Changelog",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: "General",
  //         url: "#",
  //       },
  //       {
  //         title: "Team",
  //         url: "#",
  //       },
  //       {
  //         title: "Billing",
  //         url: "#",
  //       },
  //       {
  //         title: "Limits",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function SidebarApp({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const isMobile = useIsMobile();
  const [activeTeam, setActiveTeam] = React.useState(DUMMYDATA.teams[0]);
  const { user, signOut, loading } = useUser();
  const pathname = usePathname();

  if (!activeTeam) return null;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Team Switcher */}
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <activeTeam.logo className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {activeTeam.name}
                    </span>
                    <span className="truncate text-xs">{activeTeam.plan}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side={isMobile ? "bottom" : "right"}
                sideOffset={4}
              >
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  Teams
                </DropdownMenuLabel>
                {DUMMYDATA.teams.map((team, index) => (
                  <DropdownMenuItem
                    key={team.name}
                    onClick={() => setActiveTeam(team)}
                    className="gap-2 p-2"
                  >
                    <div className="flex size-6 items-center justify-center rounded-sm border">
                      <team.logo className="size-4 shrink-0" />
                    </div>
                    {team.name}
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                    <Plus className="size-4" />
                  </div>
                  <div className="font-medium text-muted-foreground">
                    Add team
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* Team Switcher */}
      </SidebarHeader>

      <SidebarContent>
        {/* Nav Main */}
        <SidebarGroup>
          <SidebarGroupLabel>LUXIMA DASHBOARD</SidebarGroupLabel>
          <SidebarMenu>
            {DUMMYDATA.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={pathname === item.url}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a
                              href={subItem.url}
                              className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-primary",
                                {
                                  // Kelas aktif: Latar belakang primer dan teks putih
                                  "bg-primary text-white hover:text-white dark:bg-primary dark:text-black dark:hover:text-black":
                                    pathname === subItem.url,
                                }
                              )}
                            >
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        {/* Nav Main */}

        {/* Nav Project */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {DUMMYDATA.projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-primary",
                      {
                        // Kelas aktif: Latar belakang primer dan teks putih
                        "bg-primary text-white hover:text-white dark:bg-primary dark:text-black dark:hover:text-black":
                          pathname === item.url,
                      }
                    )}
                  >
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction showOnHover>
                      <MoreHorizontal />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-48 rounded-lg"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <DropdownMenuItem>
                      <Folder className="text-muted-foreground" />
                      <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Forward className="text-muted-foreground" />
                      <span>Share Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Trash2 className="text-muted-foreground" />
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <MoreHorizontal className="text-sidebar-foreground/70" />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {/* Nav Project */}
      </SidebarContent>
      <SidebarFooter>
        {/* Nav User */}
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {loading ? "Loading..." : user?.email}
                    </span>
                    <span className="truncate text-xs">
                      {loading ? "Loading..." : user?.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user?.email}
                      </span>
                      <span className="truncate text-xs">{user?.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Nav User */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
