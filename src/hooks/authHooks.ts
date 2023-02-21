import { useState } from 'react';

import type { TokenObject } from '../typings/authTypes';

export const useAuth = () => {
  const [token, setToken] = useState<TokenObject | null>(null);

  const fetchToken = async (): Promise<TokenObject | null> => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'client_id=ANDR&grant_type=password&username=&password=',
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
