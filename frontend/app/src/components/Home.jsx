import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Welcome Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Welcome to the Question Paper Generator
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          This platform allows educators to easily design, format, and generate question papers
          with multiple sections, various question types, and automatic formatting. Streamline your exam preparation process with efficiency and accuracy.
        </p>
      </header>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div
          onClick={() => navigate("/CreatePaper")}
          className="cursor-pointer bg-white border rounded-xl p-6 shadow hover:shadow-lg transition duration-200"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            ✏️ Create Question Paper
          </h2>
          <p className="text-gray-600">
            Start designing a new question paper with customizable sections and question types.
          </p>
        </div>

        <div
          onClick={() => navigate("/view")}
          className="cursor-pointer bg-white border rounded-xl p-6 shadow hover:shadow-lg transition duration-200"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            📄 View Question Papers
          </h2>
          <p className="text-gray-600">
            Access, review, and manage all your previously created question papers.
          </p>
        </div>

        <div
          onClick={() => navigate("/contact")}
          className="cursor-pointer bg-white border rounded-xl p-6 shadow hover:shadow-lg transition duration-200"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            📬 Contact Us
          </h2>
          <p className="text-gray-600">
            Get in touch for support, feedback, or any queries related to the platform.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-16 text-sm">
        &copy; 2025 Question Paper Generator. Crafted for educators.
      </footer>
    </div>
  );
};

export default Home;
