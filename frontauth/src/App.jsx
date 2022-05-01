import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import User from './User';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
