import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Compnents/Banner";
import Hero from "../Compnents/Hero";
import RoomContainer from "../Compnents/RoomContainer";

const Rooms = (props) => {
  return (
    <div>
      <Hero hero={"roomsHero"}>
        <Banner title={"Our Rooms"} subtitle={""}>
          <Link className="btn_primary" to="/">
            RETURN HOME
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </div>
  );
};

export default Rooms;
