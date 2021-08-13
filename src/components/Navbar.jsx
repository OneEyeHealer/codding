import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="fad fa-brackets-curly mx-3"></i>
          <span className="fst-italic text-info">cPlusPlus</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
