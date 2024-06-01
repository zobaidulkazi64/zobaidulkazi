'use client';
import { useEffect, useState } from "react";

interface Skill {
  id: number;
  name: string;
  level: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/skills.json");
      const data = await response.json();
      setSkills(data);
    };

    fetchSkills();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id} className="mb-2">
            <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
