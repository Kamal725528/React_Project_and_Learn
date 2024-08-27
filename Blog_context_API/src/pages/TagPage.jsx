import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function TagPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className="min-h-screen flex flex-col pt-16 pb-16">
        <Header />
        <div className="flex-1 p-4 bg-gray-50 max-w-5xl mx-auto">
        <button  onClick={() => navigation(-1)} className="inline-flex items-center mb-[10px] mt-[4px]  px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200">
             ← Back
        </button>
            <h2 className="text-2xl font-semibold text-gray-700">
                Blog Tagged <span className="text-blue-600">#{tag}</span>
            </h2>
            <Blogs />
            <Pagination />
        </div>
    </div>
    );
}

export default TagPage;