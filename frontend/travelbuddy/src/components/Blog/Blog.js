import React from "react";
import Header from "../Header/Header";

function Blog() {
  return (
    <div className="Blog">
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
        {/* Include your blog posts here */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">The Art of Travel</h2>
            <p className="text-gray-600 mb-4">Comming Soon..........</p>
            <a href="#" className="text-blue-500">Read more</a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Blog;
