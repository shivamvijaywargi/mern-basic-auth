import React, { useState } from 'react';
import Axios from 'axios';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    Axios.post('http://localhost:5000/api/v1/register', userObject)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  // const createUser = () => {
  // };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center space-y-8 ">
        <h1 className="font-bold text-3xl text-gray-700">Create an account</h1>
        <form
          onSubmit={handleSubmit}
          className="px-16 py-12 bg-blue-50 flex flex-col rounded-lg"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-3 rounded-lg mb-4 mt-1"
            id="name"
            onChange={(e) => setUserName(e.target.value)}
            name="name"
            required
          />
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
            value="Signup"
            className="px-4 py-3 rounded-lg mt-1 cursor-pointer text-white text-lg bg-blue-500"
            // onClick={createUser}
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
