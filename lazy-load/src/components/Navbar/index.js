import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";

const index = () => {
  return (
    <div className="navbar">
      <IoLogoGithub />
      <ul className="wrapper-link">
        <li>
          <Link to="/" className="btn-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="btn-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/list-product" className="btn-link">
            Product
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
