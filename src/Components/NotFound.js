import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
function NotFound() {
  return (
    <div>
      Sorry ! Not Found any Page From That URL
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default NotFound;
