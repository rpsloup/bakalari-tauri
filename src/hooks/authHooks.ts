import { useState } from 'react';

import type { UserAuth, TokenObject } from '../typings/authTypes';

export const useAuth = () => {
  const [token, setToken] = useState<TokenObject | null>(null);

  const fetchToken = async (auth: UserAuth): Promise<TokenObject | null> => {
    try {
      const res = await fetch(`${auth.apiEndpoint}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `client_id=ANDR&grant_type=password&username=${auth.userName}&password=${auth.password}`,
      });
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleLogin = async (auth: UserAuth) => {
    const token = await fetchToken(auth);
    setToken(token);
  };

  return {
    token,
    handleLogin,
  };
};
