import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';


function CategoryPage() {

    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);

    return (
        <div className="min-h-screen flex flex-col pt-16 pb-16">
        <Header />
        <div className="flex-1 p-4 bg-gray-50 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
            <button  onClick={() => navigation(-1)} className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200">
             ← Back
            </button>

            </div>
            <h2 className="text-2xl font-semibold text-gray-700">
                Blogs On <span className="text-blue-600">{category}</span>
            </h2>
            <Blogs />
            <Pagination />
        </div>
    </div>
    
    
    )
}

export default CategoryPage;