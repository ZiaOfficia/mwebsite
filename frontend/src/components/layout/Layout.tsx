import React from "react";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-texture-floral font-sans text-gray-800 selection:bg-primary selection:text-white">
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
