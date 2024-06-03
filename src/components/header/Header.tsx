// components/Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import Brand from "@/components/brand/Brand";
import Navigation from "@/components/navigation/Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Features", path: "#" },
    { title: "Integrations", path: "#" },
    { title: "Customers", path: "#" },
    { title: "Pricing", path: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn")) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={`md:hidden ${isMenuOpen ? "mx-2 pb-5" : "hidden"}`}>
        <Brand isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <Navigation navigation={navigation} state={isMenuOpen} />
    </header>
  );
};

export default Header;
