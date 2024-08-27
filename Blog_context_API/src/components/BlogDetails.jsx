import React from "react";
import { NavLink } from "react-router-dom";


function BlogDetails({post}) {

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200">
    <NavLink to={`/blog/${post.id}`}>
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">{post.title}</span>
    </NavLink>

    <p className="text-gray-600 dark:text-gray-400 mt-2">
        By <span className="font-medium text-gray-800 dark:text-gray-300">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="text-blue-600 dark:text-blue-400">{post.category}</span>
        </NavLink>
    </p>

    <p className="text-gray-500 dark:text-gray-400 mt-2">Posted on {post.date}</p>
    <p className="text-gray-700 dark:text-gray-300 mt-4">{post.content}</p>
    
    <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                <span className="text-blue-600 dark:text-blue-400">{`#${tag}`}</span>
            </NavLink>
        ))}
    </div>
</div>
  );
}

export default BlogDetails;