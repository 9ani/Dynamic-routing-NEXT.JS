import React from "react";
import Link from "next/link";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";

import blogData from "../../../public/data.json";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold">Blog</h2>
        <ul className="mt-4">
          {blogData.map((blog) => (
            <li key={blog.id}>
              {console.log(blog)} 
              <Link href={`/blog/${blog.id}`} className="text-blue-600 hover:underline">
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />

    </div>
  );
};

export default Blog;
