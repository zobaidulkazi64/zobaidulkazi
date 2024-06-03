import About from "@/components/about/About";
import ThemeToggleButton from "@/components/themes/ThemeToggleButton";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <About />
      <ThemeToggleButton />

      <img
        alt="zobaidulkazi-hero-removebg-preview.png"
        src="https://github.com/zobkazi/zobaidulkazi/blob/main/public/assets/images/zobaidulkazi-hero-removebg-preview.png?raw=true"
        data-hpc="true"
        className="Box-sc-g0xbh4-0 kzRgrI"
      ></img>
    </div>
  );
};

export default AboutPage;
