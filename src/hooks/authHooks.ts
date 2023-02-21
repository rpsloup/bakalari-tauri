import { useState } from 'react';

import type { UserAuth, TokenObject } from '../typings/authTypes';

export const useAuth = (auth: UserAuth) => {
  const [token, setToken] = useState<TokenObject | null>(null);

  const fetchToken = async (): Promise<TokenObject | null> => {
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

  const handleLogin = async () => {
    const token = await fetchToken();
    setToken(token);
  };

  return {
    token,
    handleLogin,
  };
};
