import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <section className="mb-8 sm:container sm:m-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

        <iframe
          className="rounded-2xl w-full m-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2312820549383!2d90.40694461497557!3d23.81033288456474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10068e3393f%3A0x3747d14b8e5e02a7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1647700985106!5m2!1sen!2sus"
          width="300"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default GoogleMap;
