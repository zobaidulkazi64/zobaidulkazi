import React from "react";
import WhoAmI from "./WhoAmI";
import TitleDescription from "./TitleDescription";
import Button from "./Button";
import TopBg from "./TopBg";
import BottomBg from "./BottomBg";

const Hero: React.FC = () => {
  return (
    <div className="bg-white fixed inset-0 dark:bg-black">
      <div className="relative isolate px-2  lg:px-2 h-screen">
        {/* TopBg */}
        <TopBg />

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center sm:mb-8 sm:flex sm:justify-center">
            {/* // Who am I? */}
            <WhoAmI />
          </div>
          <div className="text-center">
            {/* zobaidulkazi-description and title */}

            <TitleDescription />

            <div className="mt-10 flex flex-wrap gap-2 sm:gap-4 md:gap-8 lg:gap-16  items-center justify-center">
              {/* Resume and other buttons */}
              <Button
                name="Resume"
                link="/resume"
                className="w-full sm:w-auto text-white bg-black dark:bg-white dark:text-black"
              />
              <Button
                name="Github"
                link="https://github.com/zobkazi"
                className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black"
              />
              <Button
                name="LinkedIn"
                link="https://www.linkedin.com/in/zobaidulkazi"
                className="w-full sm:w-auto"
              />
              <Button
                name="LinkedIn"
                link="https://www.linkedin.com/in/zobaidulkazi"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
        {/* Bottom_BG */}
        <BottomBg />
      </div>
    </div>
  );
};

export default Hero;
