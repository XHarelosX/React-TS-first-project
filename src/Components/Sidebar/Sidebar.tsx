import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";

interface Props {
  sideBarStatus: boolean;
}

const Sidebar: React.FC<Props> = ({ sideBarStatus }) => {
  let sideNavbarCss = [classes.aside_sidebar, classes.Close].join(" ");
  if (sideBarStatus === true) {
    sideNavbarCss = [classes.aside_sidebar, classes.Open].join(" ");
  }

  return (
    <Fragment>
      <aside className={sideNavbarCss}>
        <nav className={classes.nav_sidebar}>
          <ul className={classes.ul_sidebar}>
            <li>Home</li>
            <li>Cooking Recipes</li>
            <li>Cocktails Recipes</li>
            <li>About</li>
          </ul>
        </nav>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
