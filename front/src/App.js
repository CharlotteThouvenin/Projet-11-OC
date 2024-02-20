
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import User from './Pages/User';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login/>} />
      <Route path= "./User/:id" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
  );
}

export default App;
