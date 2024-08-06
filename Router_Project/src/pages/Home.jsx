import toast from "react-hot-toast"
import { Link } from "react-router-dom"

function Home(){
    return(
        <div className="min-h-screen bg-richblack-900">
        {/* Hero Section */}
        <section className="bg-customBlue-100 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Study Notion</h1>
            <p className="text-lg mb-8">Organize your study materials and track your progress</p>
            <Link to="/login">
            <button className="bg-richblack-900 text-blue-100 font-bold py-2 px-4 rounded hover:bg-richblack-700">
              Get Started
            </button>
            </Link>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="container mx-auto py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-richblack-100">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-richblack-900">Organize Your Notes</h3>
              <p className="text-richblack-700">Keep all your notes in one place and easily access them whenever you need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-richblack-900">Track Your Progress</h3>
              <p className="text-richblack-700">Monitor your study sessions and see your improvement over time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-richblack-900">Collaborate with Peers</h3>
              <p className="text-richblack-700">Share your notes and study materials with your friends and classmates.</p>
            </div>
          </div>
        </section>
  
        {/* Images Section */}
        <section className="container mx-auto py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-richblack-100">Our Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="src/assets/student1.jpg" alt="Student 1" className="w-full h-55 object-cover rounded-lg mb-4"/>
              <p className="text-richblack-700 font-bold">Studying hard.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="src/assets/student2.avif" alt="Student 2" className="w-full h-55 object-cover rounded-lg mb-4"/>
              <p className="text-richblack-700 font-bold">Focused on learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="src/assets/student3.png" alt="Student 3" className="w-full h-55 object-cover rounded-lg mb-4"/>
              <p className="text-richblack-700 font-bold">Preparing for exams.</p>
            </div>
          </div>
        </section>

  
        {/* Footer */}
        <footer className="bg-richblack-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Study Notion. All rights reserved.</p>
          </div>
        </footer>
      </div>

     
    )
}

export default Home