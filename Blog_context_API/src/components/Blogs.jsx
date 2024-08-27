import { useContext } from 'react';
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails'


function Blogs() {
    const { posts, loading } = useContext(AppContext);
  
    return (
      <div className="flex flex-col gap-y-10 my-4 px-4 lg:px-0 max-w-4xl mx-auto min-h-[80vh]">
      {loading ? (
          <div className="flex justify-center items-center">
              <p className="text-center font-bold text-3xl text-gray-800 dark:text-gray-200"><Spinner/></p>
          </div>
      ) : posts.length === 0 ? (
          <div className="flex justify-center items-center">
              <p className="text-center font-bold text-3xl text-gray-800 dark:text-gray-200">No Blogs Found!</p>
          </div>
      ) : (
          posts.map((post) => (
              <BlogDetails key={post.id} post={post} />
          ))
      )}
  </div>
  );
}
  
  export default Blogs;
  
