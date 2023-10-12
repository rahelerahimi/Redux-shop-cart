import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <>
      <div className="parenterror">
        <div>
          <p className="textsize">404</p>
          <Link to="/">
            <button className="btnerror">home page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
