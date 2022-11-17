import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src="imgs/logo.svg" alt="Intime Digital logo" />
      </div>
      <div className="nav-avatar">
        <p className="dm-sans-font">Esther</p>
        <div className="usr-avatar">
          <img src="imgs/usr-avatar.svg" alt="User avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
