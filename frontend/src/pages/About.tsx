import { FaSearch, FaStar, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
          About TeacherRate
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          TeacherRate is a platform designed to help students rate and review their teachers. 
          We create a transparent community where students can share experiences and make informed decisions.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <FaSearch className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Search & Discover</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Easily search for teachers by subject or department and discover ratings and reviews.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <FaStar className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Rate & Review</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Share your experiences and provide constructive feedback to help others.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with students and teachers to improve the learning experience for everyone.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Ready to help shape the future of education?
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
