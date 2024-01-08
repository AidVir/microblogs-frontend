import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/AuthService";
import UserForm from "../form/UserForm";


const RegisterPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    setMessage('');
    setLoading(true);

    AuthService.register(username, password).then(
        () => {
          setMessage("New user registered successfully. Please log in.");
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
          onSubmit={handleRegister}
          username={username}
          setUsername = {setUsername}
          password={password}
          setPassword = {setPassword}
          disabled={loading}
          message={message}
          isLoginPage={false}
      />
  );
};

export default RegisterPage;