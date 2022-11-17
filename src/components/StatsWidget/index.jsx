import React from "react";
import { Link } from "react-router-dom";
import "./statswidget.css";
const StatsWidget = () => {
  return (
    <section className="container stats-widget color-dark">
      <div className="stats-total">
        <h1 className="dm-sans-font weight-700">Usage</h1>
        <div className="stats-details-wrap">
          <table className="styled-table">
            <thead>
              <tr>
                <th></th>
                <th>Today</th>
                <th>Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total API calls</td>
                <td className="table-body-td">
                  3 860 <br /> <small>+10%</small>
                </td>
                <td className="table-body-td">
                  56 860 <br /> <small>-2%</small>
                </td>
              </tr>
              <tr>
                <td>Estimate cost</td>
                <td className="table-body-td">$350</td>
                <td className="table-body-td">$7 856</td>
              </tr>
              <p className="space-top">Per key usage</p>
              <tr>
                <p className="table-body-td table-stats-key">******Kw3UH</p>
                <td className="table-body-td">950</td>
                <td className="table-body-td">10 766</td>
              </tr>
              <tr>
                <p className="table-body-td table-stats-key">******Kw3UH</p>
                <td className="table-body-td">1 268</td>
                <td className="table-body-td">20 848</td>
              </tr>
            </tbody>
          </table>
          <Link to='/' className="see-more">See More</Link>
        </div>
      </div>
      <div className="stats-graph">
        <div className="graph-head items-flex">
          <div className="shifter items-flex">
            <div className="thick-line-img ">
              <img src="imgs/thick-line.svg" alt="thick-line" />
            </div>
            <p className="space-left">this month</p>
          </div>
          <div className="dotted-line-img space-right">
            <img src="imgs/dotted-line.svg" alt="dotted-line" />
          </div>
          <p>last month</p>
        </div>
        <div className="graph-body">
          <img src="imgs/stats-widget-graph.svg" alt="graph analysis" />
        </div>
      </div>
    </section>
  );
};

export default StatsWidget;
