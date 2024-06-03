// components/Skill.tsx
import React from "react";

interface SkillProps {
  source: string;
  alt: string;
  title: string;
}

const Skill: React.FC<SkillProps> = ({ source, alt, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={source} alt={alt} className="w-16 h-16 mb-2" />
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default Skill;
