import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={"/"}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to={"/link"}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Test
      </NavLink>
    </nav>
  );
};

export default Navigation;
