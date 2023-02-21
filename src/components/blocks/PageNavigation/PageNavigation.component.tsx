import { Link } from 'react-router-dom';

import './PageNavigation.styles.scss';

const PageNavigation = (): JSX.Element => (
  <nav className="page-navigation">
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/">
          <div className="item-box" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <div className="item-box" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <div className="item-box" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <div className="item-box" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <div className="item-box" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default PageNavigation;
