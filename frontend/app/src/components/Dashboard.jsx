import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleCreatePaper = () => {
    navigate('/create-paper');
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-green-500 to-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 animate__animated animate__zoomIn animate__delay-2s">
          Teacher Dashboard
        </h2>
        <button
          onClick={handleCreatePaper}
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out mb-4"
        >
          Create Question Paper
        </button>
        <button
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          View Previous Papers
        </button>
      </div>
    </div>
  );
}
