"use client";

import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 400; // Adjust this value as per your requirement
      if (window.pageYOffset > threshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;
