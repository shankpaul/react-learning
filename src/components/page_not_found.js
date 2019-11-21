import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => (
  <div className="jumbotron">
    <h1 className="display-4">Page Not Found</h1>
    <p className="lead">Sorry, Requested page is not available.</p>
    <p className="lead">
      <Link to="home">Go to Home Page</Link>
    </p>
  </div>
);
export default PageNotFound;
