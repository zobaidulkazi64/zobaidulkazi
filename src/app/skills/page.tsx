import React from "react";

const BackgroundImageComponent: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 bg-gradient-to-b from-yellow-200 to-red-900 "
        style={{
          backgroundImage:
            "url('https://github.com/zobkazi/zobaidulkazi/blob/main/public/assets/images/zobaidulkazi-hero.png?raw=true')",
        }}
      />
      <h1 className="relative text-white text-5xl font-bold">
        Welcome to Next.js
      </h1>
    </div>
  );
};

export default BackgroundImageComponent;
