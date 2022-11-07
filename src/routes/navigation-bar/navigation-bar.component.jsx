import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./navigation-bar.styles.scss";

const NavigationBar = () => (
  <Fragment>
    <div className="navigation-bar">
      <Link className="logo-container" to="/">
        <div>
          <Logo className="logo" />
        </div>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="shop">
          SHOP
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default NavigationBar;
