import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-extrabold mb-4">QGen</h1>
        <p className="text-xl text-center">Smart Question Paper Generator for Teachers</p>
        <div className="mt-8 text-sm text-white/80 text-center max-w-sm">
          Save time. Create question papers effortlessly. Custom marking, sections, and instant formatting.
        </div>
      </div>

      {/* Right side - Login */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-semibold text-center mb-6">Teacher Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <div className="my-4 text-center text-gray-500">or</div>

          <button
            onClick={loginWithGoogle}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Login with Google
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
