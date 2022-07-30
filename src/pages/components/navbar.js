import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar" style={{ display: "flex" }}>
        <a href="">
          <div className="nav-item">Profile</div>
        </a>

        <a href="">
          <div className="nav-item">Profile</div>
        </a>
        <a href="">
          <div className="nav-item">Experience</div>
        </a>
        <a href="">
          <div className="nav-item">Education</div>
        </a>
        <a href="">
          <div className="nav-item">Skills</div>
        </a>
        <a href="">
          <div className="nav-item">Contact</div>
        </a>
      </div>
    </>
  );
}

export default Navbar;
