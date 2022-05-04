import React, { useEffect, useState } from 'react';
import Axios from 'axios';

Axios.defaults.withCredentials = false;

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);

  const sendRequest = async () => {
    const res = await Axios.get('http://localhost:5000/api/v1/user', {
      withCredentials: true,
    }).catch((err) => console.log(err));

    const data = await res.data;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

    return data;
  };

  return <div>Welcome {user && <h1>{user.name}</h1>}</div>;
};

export default User;
