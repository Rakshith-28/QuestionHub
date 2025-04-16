import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  return <h1>Login Page</h1>;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login success
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 animate__animated animate__zoomIn">
          Teacher Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </div>
      </div>
    </div>
  );
};


