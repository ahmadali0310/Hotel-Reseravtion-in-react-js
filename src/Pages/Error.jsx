import React from "react";
import Hero from "../Compnents/Hero";
import Banner from "../Compnents/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title={"404"} subtitle={"Page not found"}>
          <Link to="/">BACK TO HOME</Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Error;
