import DefaultLayout from '../layouts/DefaultLayout';

import { useAuth } from '../hooks/authHooks';

const HomePage = (): JSX.Element => {
  const { token } = useAuth();

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <p>{token?.expires_in ?? ''}</p>
    </DefaultLayout>
  );
};

export default HomePage;
