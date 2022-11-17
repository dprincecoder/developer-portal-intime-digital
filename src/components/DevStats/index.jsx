import React from "react";
import "./devstats.css";
import { Link } from "react-router-dom";
const DevStats = () => {
  return (
    <section className="developer-stats container">
      <h1 className="dm-sans-font color-dark">Developer</h1>
      <p className="dm-sans-font color-dark">
        API Access tokens and seurity, Usage details
      </p>
      <div className="developer-stats-keys dm-sans-font items-flex">
        <div className="developer-stats-keys-item active">
          <Link to="/">Statistics</Link>
        </div>
        <div className="developer-stats-keys-item">
          <Link to="/">Models</Link>
        </div>
        <div className="developer-stats-keys-item">
          <Link to="/portal_keys">API Keys</Link>
        </div>
      </div>
    </section>
  );
};

export default DevStats;
