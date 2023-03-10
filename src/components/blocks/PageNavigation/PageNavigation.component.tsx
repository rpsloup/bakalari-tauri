import { Link, useNavigate, useLocation } from 'react-router-dom';

import Icon from '../../elements/Icon';

import { useAuth } from '../../../hooks/authHooks';

import './PageNavigation.styles.scss';

const PageNavigation = (): JSX.Element => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="page-navigation">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">
            <div
              className={`item-box ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              <Icon name="house" type="fas" />
              <span className="box-label">Domů</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/marks">
            <div
              className={`item-box ${
                location.pathname === '/marks' ? 'active' : ''
              }`}
            >
              <Icon name="book" type="fas" />
              <span className="box-label">Známky</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/timetable">
            <div
              className={`item-box ${
                location.pathname === '/timetable' ? 'active' : ''
              }`}
            >
              <Icon name="calendar-days" type="fas" />
              <span className="box-label">Rozvrh</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/absence">
            <div
              className={`item-box ${
                location.pathname === '/absence' ? 'active' : ''
              }`}
            >
              <Icon name="person-circle-question" type="fas" />
              <span className="box-label">Absence</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/predictor">
            <div
              className={`item-box ${
                location.pathname === '/predictor' ? 'active' : ''
              }`}
            >
              <Icon name="calculator" type="fas" />
              <span className="box-label">Předvídač</span>
            </div>
          </Link>
        </li>
        <li className="nav-item spaced">
          <Link to="/">
            <div
              className="item-box"
              onClick={async () => {
                await handleLogout();
                navigate('/login');
              }}
            >
              <Icon name="sign-out" type="fas" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
