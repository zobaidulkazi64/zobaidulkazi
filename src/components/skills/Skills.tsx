// components/Skills.tsx
import React from "react";
import Skill from "./Skill";

const Skills: React.FC = () => {
  return (
    <div className="skills p-6">
      <h2 className="text-2xl font-bold mb-4">
        I have experience with these technologies
      </h2>
      <div className="skillsGrid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for React"
          title="React"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
          title="HTML 5"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
          title="CSS 3"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="The logo icon for TailwindCSS"
          title="Tailwind CSS"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHub"
          title="GitHub"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          alt="The logo icon for NPM"
          title="NPM"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="The logo icon for NodeJS"
          title="Node JS"
        />
      </div>
    </div>
  );
};

export default Skills;
