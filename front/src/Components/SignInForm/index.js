import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../actions';
import { fetchUserInfo } from '../../Utils/callAPI';
import { useNavigate } from 'react-router-dom';
import './style.scss'
import Modal from '../Modal';


const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');


  // gère la case à cocher remember me
  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  // gère la fermeture de la modale en fonction du succès ou de l'echec de la connexion
  const closeModal = () => {
    setShowModal(false);
  };

  // gère la connexion
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.body.token) {
        // stock les données dans le session storage si remember me est coché
        if (rememberMe === true) {
          sessionStorage.setItem('rememberedEmail', email);
          sessionStorage.setItem('rememberedPassword', password);
        }
        dispatch(setToken(data.body.token)); // enregistre token dans le store
        sessionStorage.setItem('token', data.body.token)
        navigate('/User')

      } else {
        setShowModal(true); // ouverture de la modale
        setModalMessage('Login has failed, please try again.') // message d'erreur de connexion
      }
    } catch (error) {
      setShowModal(true);
      setModalMessage('Login has failed, please try again.')
    }
  };



  // vérifie si des données sont stockées et remplie les champs si oui
  useEffect(() => {
    const rememberedEmail = sessionStorage.getItem('rememberedEmail');
    const rememberedPassword = sessionStorage.getItem('rememberedPassword');
    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  const token = useSelector(state => state.token)
  useEffect(() => {
    if (token) {
      fetchUserInfo(token, dispatch);
    }
  }, [token, dispatch]);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} /><label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
      <Modal isOpen={showModal} onClose={closeModal} message={modalMessage} />

    </div>
  );
};

export default SignInForm;