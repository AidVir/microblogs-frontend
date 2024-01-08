import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/AuthService";
import UserForm from "../form/UserForm";


const LoginPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setMessage('');
    setLoading(true);

    AuthService.login(username, password).then(
        () => {
          navigate('/home');
        },
        (error) => {
          const resMessage =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
    );
  };

  return (
      <UserForm
          onSubmit={handleLogin}
          username={username}
          setUsername = {setUsername}
          password={password}
          setPassword = {setPassword}
          disabled={loading}
          message={message}
          isLoginPage={true}
      />
  );
};

export default LoginPage;