import Footer from "@/components/sections/footer";

import {
  Navbar,
  NavbarActions,
  NavMenu,
} from "@/components/sections/navbar";

import { ReactNode } from "react";
import { baseOptions } from '@/lib/layout.shared';

import { HomeLayout } from 'fumadocs-ui/layouts/home';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import { navLinks } from "@/lib/constants/nav-links";
import { icon } from "mermaid/dist/rendering-util/rendering-elements/shapes/icon.js";
import { Circle } from "lucide-react";
import { label } from "motion/react-client";



const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <HomeLayout
      {...baseOptions()}
      links={navLinks.map((item) => {
        // Jika memiliki children, tampilkan sebagai menu dropdown
        if (item.children) {
          return {
            text: item.label,
            label: item.label,
            url: item.href,
            type: item.children ? 'menu' : 'main',
            active: 'nested-url',
            items: item.children.map((child) => ({
              text: child.label,
              url: child.href,
              // Fumadocs mendukung icon jika Anda menggunakan Lucide React
              // icon: child.icon ? <YourIconComponent name={child.icon} /> : undefined
              icon: child.icon ? <child.icon className="size-4" /> : <Circle className="size-2" />, 
            })),
          };
        }

        // Navigasi standar
        return {
          text: item.label,
          url: item.href,
          active: 'nested-url', // atau 'nested-url'
        };
      })}
    >
    
     
      {/* <Navbar>
        <NavbarMenu />
        <NavbarActions />
      </Navbar> */}
      <main className="flex flex-1 flex-col divide-y divide-dashed divide-border border-border border-dashed sm:border-b">
        {/* <Header /> */}
       {children}
        <Footer />
      </main>
    </HomeLayout>
  );
};

export default Layout;
