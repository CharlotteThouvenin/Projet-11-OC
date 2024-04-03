
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import User from './Pages/User';
import Error from './Pages/Error';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { createGlobalStyle } from 'styled-components';
import { EditUser } from './Pages/EditUser';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserInfo } from './Utils/callAPI';
import { setToken } from './actions';



const GlobalStyle = createGlobalStyle`
    html {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin: 0;
    }
    body {
      margin: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .main {
      flex: 1;
  }
  
  .bg-dark {
      background-color: #12002b;
  }
`

function App() {

  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');


  useEffect(() => {
    if (token) {
      fetchUserInfo(token, dispatch);
      dispatch(setToken(token));
    }
  }, [token, dispatch]);


  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
        <Route path="*" element={<Error />} />
        <Route path="/editUser" element={<EditUser />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
