import React, { useState } from 'react';

function Welcome() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Login attempted with:', { username, password, rememberMe });
    // Handle login logic here
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side - Gradient Background */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-500 to-yellow-500 flex flex-col items-center justify-center text-white p-8">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-6">New to our Shop?</h2>
          <p className="mb-8">
            There are advances being made in science and technology everyday, and a good example of this is the
          </p>
          <button className="border-2 border-white text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Welcome Back !</h1>
            <h2 className="text-2xl font-bold">Please Sign in now</h2>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full border-b border-gray-300 py-3 focus:border-pink-500 focus:outline-none"
              />
            </div>

            <div className="mb-8">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border-b border-gray-300 py-3 focus:border-pink-500 focus:outline-none"
              />
            </div>

            <div className="mb-8 flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 h-5 w-5 text-pink-500 focus:ring-0"
              />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full  bg-gradient-to-r from-blue-500 to-yellow-500 text-white font-medium py-3 px-4 rounded-full transition-colors duration-300 cursor-pointer"
            >
              LOG IN
            </button>

            <div className="mt-6 text-right">
              <a href="#" className="text-gray-500 hover:text-pink-500">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;