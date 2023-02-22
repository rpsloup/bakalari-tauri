import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '../components/elements/Loader';

import { useAuth } from '../hooks/authHooks';

import type { FormEvent, ChangeEvent } from 'react';

const LoginPage = (): JSX.Element => {
  const [apiEndpoint, setApiEndpoint] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const { authLoading, handleLogin } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!apiEndpoint || !userName || !password) return;
    const accessObject = await handleLogin({
      apiEndpoint,
      userName,
      password,
    });
    if (accessObject) navigate('/');
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="endpoyčint">Endpoint</label>
        <br />
        <input
          type="text"
          name="endpoint"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setApiEndpoint(e.target.value)
          }
        />
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <br />
        <br />
        {authLoading ? <Loader /> : <input type="submit" value="Sign in" />}
      </form>
    </>
  );
};

export default LoginPage;
