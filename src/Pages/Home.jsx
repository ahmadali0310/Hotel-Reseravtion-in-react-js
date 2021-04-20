import React from "react";
import Banner from "../Compnents/Banner";
import Hero from "../Compnents/Hero";
import { Link } from "react-router-dom";
import Services from "../Compnents/Services";
import FeaturedRooms from "../Compnents/FeaturedRooms";

const Home = () => {
  return (
    <div>
      <Hero hero={"defaultHero"}>
        <Banner
          title={"Luxurious Rooms"}
          subtitle={"Deluxe Rooms Starting At $299"}
        >
          <Link className="btn_primary" to="/rooms">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
};

export default Home;
