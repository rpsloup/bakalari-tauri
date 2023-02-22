import { useState, useEffect } from 'react';

import type { UserAuth, TokenObject, AccessObject } from '../typings/authTypes';

export const useAuth = () => {
  const [auth, setAuth] = useState<AccessObject | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const fetchToken = async (auth: UserAuth): Promise<TokenObject | null> => {
    setAuthLoading(true);
    try {
      const res = await fetch(`${auth.apiEndpoint}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `client_id=ANDR&grant_type=password&username=${auth.userName}&password=${auth.password}`,
      });
      setAuthLoading(false);
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
      setAuthLoading(false);
      return null;
    }
  };

  const handleLogin = async (auth: UserAuth): Promise<AccessObject | null> => {
    const token = await fetchToken(auth);
    if (!token) return null;
    const accessObject = {
      apiEndpoint: auth.apiEndpoint,
      tokenData: token,
    };
    setAuth(accessObject);
    localStorage.setItem('auth', JSON.stringify(accessObject));
    return accessObject;
  };

  const handleLogout = async () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if (localAuth) setAuth(JSON.parse(localAuth));
  }, []);

  return {
    auth,
    authLoading,
    handleLogin,
    handleLogout,
  };
};
