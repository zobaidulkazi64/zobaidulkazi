// components/Skills.tsx
import React from "react";
import { Snippet } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

// Define the type for the skills data
type Skill = {
  name: string;
  level: string;
};

// Sample data for skills
const skillsData: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
];

const Skills: React.FC = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">My Skills</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          {skillsData.map((skill, index) => (
            <Snippet key={index} className="text-white text-3xl font-bold">
              {skill.name}: {skill.level}
            </Snippet>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default Skills;
