import { useState } from "react";
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Submitted:", "Email:", email, "Passsword:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[c]">
      <div className="border-2 border-emerald-500 p-8 rounded-lg  shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-black"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-black"
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
