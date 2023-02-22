import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import { useAuth } from './hooks/authHooks';

import './styles/reset.scss';
import './styles/main.scss';

const App = (): JSX.Element => {
  const { token } = useAuth();

  return token ? (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  ) : (
    <LoginPage />
  );
};

export default App;
