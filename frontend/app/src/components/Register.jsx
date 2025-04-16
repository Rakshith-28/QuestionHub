import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration success
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 animate__animated animate__zoomIn animate__delay-1s">
          Teacher Registration
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <a href="/" className="text-purple-500 hover:underline">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
