import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-16 pb-16"> 
    <Header />
    <div className="flex-1 p-4 bg-gray-50 max-w-4xl mx-auto">
        <Blogs />
        <Pagination />
    </div>
</div>
  );     
}

export default Home;