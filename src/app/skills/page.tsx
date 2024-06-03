import React from "react";

const BackgroundImageComponent: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center  h-full w-full"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png')",
        }}
      />
      <h1 className="relative text-black text-5xl font-bold">
        Welcome to Next.js
      </h1>

      <h2 className="relative text-black text-3xl">Learn how to build an app</h2>
    </div>
  );
};

export default BackgroundImageComponent;
