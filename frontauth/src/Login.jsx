import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const sendRequest = async () => {
    const userData = {
      email: userEmail,
      password: userPassword,
    };

    const res = await Axios.post(
      'http://localhost:5000/api/v1/login',
      userData
    );

    const data = await res.data;

    console.log(data);

    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest();
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center space-y-8 ">
        <h1 className="font-bold text-3xl text-gray-700">
          Login to your account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="px-16 py-12 bg-blue-50 flex flex-col rounded-lg"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg mb-4 mt-1"
            id="email"
            name="email"
            required
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="px-4 py-3 rounded-lg mb-4 mt-1"
            id="password"
            name="password"
            required
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Login"
            className="px-4 py-3 rounded-lg mt-1 cursor-pointer text-white text-lg bg-blue-500"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
