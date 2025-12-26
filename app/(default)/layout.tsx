import Footer from "@/components/sections/footer";

import {
  Navbar,
  NavbarActions,
  NavbarMenu,
} from "@/components/sections/navbar";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar>
        <NavbarMenu />
        <NavbarActions />
        
      </Navbar>
      <main className="flex flex-1 flex-col divide-y divide-dashed divide-border border-border border-dashed sm:border-b">
        {/* <Header /> */}
        <div className="relative mt-20">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
