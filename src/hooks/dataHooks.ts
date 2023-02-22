import { useState, useEffect } from 'react';

import type { APIEndpoint } from '../typings/apiTypes';
import type { AccessObject } from '../typings/authTypes';

export const useEndpoint = (
  access: AccessObject | null,
  endpoint: APIEndpoint
) => {
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (!access?.tokenData) {
        setLoading(false);
        return;
      }
      const res = await fetch(`${access.apiEndpoint}/api/3${endpoint}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `${access.tokenData.token_type} ${access.tokenData.access_token}`,
        },
      });
      setLoading(false);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [access]);

  return {
    data,
    loading,
  };
};
