import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";


const BlogPage = () => {

  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);
  
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col pt-16 pb-16">
    <Header />
    <div className="flex-1 p-4 bg-gray-50 max-w-5xl mx-auto">
      {
        loading? (<Spinner/>):
        (<button  onClick={() => navigation(-1)} className="inline-flex items-center px-4 py-2 mb-[4px] mt-[4px] bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200">
            ← Back
         </button>)
      }

        <div>
            {loading ? (
                <p className="text-center text-gray-600"><Spinner/></p>
            ) : blog ? (
                <div>
                    <BlogDetails post={blog} />
                    <h2 className="text-xl font-semibold text-gray-700 mt-6">Related Blogs</h2>
                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                        {relatedblog.map((post) => (
                            <BlogDetails key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">No Blog Found</p>
            )}
        </div>
    </div>
</div>

  );
};

export default BlogPage;
