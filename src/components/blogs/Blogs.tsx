"use client";
import React, { useState } from "react";
import BlogPostData from "@/config/BlogPostData";

interface Post {
  title: string;
  desc: string;
  img: string;
  date: string;
  href: string;
}

const BlogsComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts to display per page

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BlogPostData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
          <p className="text-gray-600">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <li key={index} className="w-full mx-auto group sm:max-w-sm">
              <a href={post.href}>
                <img
                  src={post.img}
                  loading="lazy"
                  alt={post.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    {post.date}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {post.desc}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from(
            { length: Math.ceil(BlogPostData.length / postsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md ${
                  currentPage === i + 1 ? "bg-indigo-600 text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsComponent;
