import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { API_BASE_URL } from "../../config";

const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center px-4">
      <div className="bg-stone-800 p-8 rounded-lg shadow-xl w-full max-w-md border border-stone-700">
        <h2 className="text-3xl font-serif text-stone-100 mb-6 text-center">
          Admin Login
        </h2>

        {error && (
          <div className="bg-red-900/50 text-red-200 p-3 rounded mb-4 text-sm border border-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-stone-400 mb-2 text-sm">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2 focus:outline-none focus:border-yellow-600 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-stone-400 mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded px-4 py-2 focus:outline-none focus:border-yellow-600 transition-colors"
              required
            />
          </div>
          <Button variant="primary" className="w-full justify-center">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
