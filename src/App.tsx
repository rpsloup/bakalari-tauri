import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MarksPage from './pages/MarksPage';
import TimetablePage from './pages/TimetablePage';
import LoginPage from './pages/LoginPage';

import './styles/reset.scss';
import './styles/main.scss';
import './styles/animations.scss';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/marks" element={<MarksPage />} />
    <Route path="/timetable" element={<TimetablePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default App;
