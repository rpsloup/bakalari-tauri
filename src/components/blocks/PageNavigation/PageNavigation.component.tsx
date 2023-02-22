import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../elements/Icon';

import { useAuth } from '../../../hooks/authHooks';

import './PageNavigation.styles.scss';

const PageNavigation = (): JSX.Element => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="page-navigation">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">
            <div className="item-box active">
              <Icon name="house" type="fas" />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            <div className="item-box">
              <Icon name="house" type="fas" />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            <div className="item-box">
              <Icon name="house" type="fas" />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            <div className="item-box">
              <Icon name="house" type="fas" />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            <div className="item-box">
              <Icon name="house" type="fas" />
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
