'use client'
import React from 'react';
import Header from "../../../components/layouts/header";
import Footer from "../../../components/layouts/footer";

import blogData from "../../../../public/data.json";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams(); 
  const blogId = parseInt(id);
  const blog = blogData.find(({ id }) => id === blogId);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold">{blog.title}</h2>
        <p className="text-sm text-gray-500">Author: {blog.author}</p>
        <p className="text-sm text-gray-500">Date: {blog.date}</p>
        <p className="mt-4">{blog.description}</p>
      </div>
      <Footer />

    </div>
  );
};

export default BlogPost;
