import { useState, useEffect } from 'react';

import type { UserAuth, TokenObject } from '../typings/authTypes';

export const useAuth = () => {
  const [token, setToken] = useState<TokenObject | null>(null);
  const [tokenLoading, setTokenLoading] = useState<boolean>(false);

  const fetchToken = async (auth: UserAuth): Promise<TokenObject | null> => {
    setTokenLoading(true);
    try {
      const res = await fetch(`${auth.apiEndpoint}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `client_id=ANDR&grant_type=password&username=${auth.userName}&password=${auth.password}`,
      });
      setTokenLoading(false);
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
      setTokenLoading(false);
      return null;
    }
  };

  const handleLogin = async (auth: UserAuth): Promise<TokenObject | null> => {
    const token = await fetchToken(auth);
    if (!token) return null;
    setToken(token);
    localStorage.setItem('token', JSON.stringify(token));
    return token;
  };

  const handleLogout = async () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken) setToken(JSON.parse(localToken));
  }, []);

  return {
    token,
    tokenLoading,
    handleLogin,
    handleLogout,
  };
};
