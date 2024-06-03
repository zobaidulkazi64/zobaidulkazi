"use client";
import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

const FormHandler = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResponseMessage("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.company ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again later.");
        return;
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setFormData({ fullName: "", email: "", company: "", message: "" });
    } catch (error) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {responseMessage && <p className="text-green-500">{responseMessage}</p>}
        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandler;
