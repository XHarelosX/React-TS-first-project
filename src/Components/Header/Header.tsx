import React, { Fragment } from "react";
import classes from "./Header.module.css";

interface Props {
  sideBarStatus: boolean;
  BTClickHandler: any;
}

const Header: React.FC<Props> = ({ sideBarStatus, BTClickHandler }) => {
  let sideBarClasses: any = classes.DrawerToggle;

  if (sideBarStatus) {
  }

  return (
    <Fragment>
      <header>
        <nav className={classes.nav_header}>
          <div className={sideBarClasses} onClick={BTClickHandler}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={classes.nav_ul_header}>
            <li>Home</li>
            <li>Cooking Recipes</li>
            <li>Cocktails Recipes</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
