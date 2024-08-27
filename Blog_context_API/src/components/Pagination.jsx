import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className='fixed bottom-0 inset-x-0 bg-white dark:bg-gray-800 py-3 border-t-2 border-t-gray-300 dark:border-t-gray-700 shadow-lg mt-[8px]'>
    <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
        {page > 1 && (
            <button 
                onClick={() => handlePageChange(page - 1)} 
                className='border-2 border-gray-300 dark:border-gray-600 py-1 px-4 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
            >
                Previous
            </button>
        )}

        {page < totalPages && (
            <button 
                onClick={() => handlePageChange(page + 1)} 
                className='border-2 border-gray-300 dark:border-gray-600 py-1 px-4 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
            >
                Next
            </button>
        )}

        <p className='text-sm font-semibold ml-auto text-gray-600 dark:text-gray-300'>
            Page {page} of {totalPages}
        </p>
    </div>
</div>
 );
}

export default Pagination;
