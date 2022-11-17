import React from "react";
import DevStats from "../../components/DevStats";
import Nav from "../../components/nav";
import StatsWidget from "../../components/StatsWidget";

const Home = () => {
  return (
    <>
      <Nav />
      <DevStats />
      <StatsWidget />
    </>
  );
};

export default Home;
