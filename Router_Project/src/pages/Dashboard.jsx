import React, { useState } from 'react';

function Dashboard() {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="flex min-h-screen bg-richblack-900">
            {/* Sidebar */}
            <aside className="w-64 bg-customBlue-100 text-white flex-shrink-0">
                <div className="p-4">
                    <h2 className="text-3xl font-bold">Dashboard</h2>
                    <nav className="mt-8">
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="block py-2 px-4 rounded hover:bg-pink-200">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="block py-2 px-4 rounded hover:bg-pink-200">My Notes</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="block py-2 px-4 rounded hover:bg-pink-200">Study Sessions</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="block py-2 px-4 rounded hover:bg-pink-200">Settings</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-richblack-900">Welcome Back!</h1>
                        <button className="bg-customBlue-100 text-white font-bold py-2 px-4 rounded hover:bg-pink-200">New Note</button>
                    </div>
                </header>

                {/* Main Dashboard Content */}
                <main className="flex-1 p-6">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Example Widgets */}
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-2 text-richblack-900">Recent Notes</h3>
                                <p className="text-richblack-700">Here are your most recent notes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-2 text-richblack-900">Upcoming Study Sessions</h3>
                                <p className="text-richblack-700">You have a session scheduled for tomorrow.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-bold mb-2 text-richblack-900">Progress</h3>
                                <p className="text-richblack-700">You have completed 75% of your current study goal.</p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Video Section */}
                <div className="flex justify-center items-center p-6">
                    {!showVideo ? (
                        <div
                            className="relative cursor-pointer"
                            onClick={handleVideoClick}
                        >
                            <img
                                src="src/assets/demo.jpg"
                                alt="Video Poster"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <button className="bg-black bg-opacity-50 text-white py-2 px-4 rounded-full">Play Video</button>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            width="1000"
                            height="400"
                            src="https://www.youtube.com/embed/868a9F93_lY?si=QsV8xaw5ziGCz-bF"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                {/* Footer */}
                <footer className="bg-richblack-800 text-white p-4 text-center">
                    <div className="container mx-auto">
                        <p>&copy; 2024 Study Notion. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Dashboard;
