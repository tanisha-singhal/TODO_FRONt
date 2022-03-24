import React from "react";

import classes from "./Navbar.module.css";
function Navbar() {
  
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <img
          className={classes.icon}
          src="https://img.icons8.com/material-outlined/45/ffffff/checked-checkbox.png"
          alt=""
        />
        <h1 className={classes.logo}>TODO</h1>
      </div>
      </header>
  );
}

export default Navbar;
