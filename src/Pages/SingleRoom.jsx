import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../Compnents/Banner";
import StyedHero from "../Compnents/StyedHero";

const SingleRoom = (props) => {
  const state = useSelector((state) => state);
  const roomSlug = props.props.match.params.slug;
  const room = state.find((room) => room.slug === roomSlug);
  let [mainImg, ...rest] = room.images;

  return (
    <div>
      <StyedHero img={mainImg}>
        <Banner title={room.name} subtitle={""}>
          <Link className="btn_primary" to="/">
            BACK TO HOME
          </Link>
        </Banner>
      </StyedHero>
      <div className="img_container_singleRoom">
        {rest.map((img, index) => {
          return (
            <div key={index} className="img">
              <img src={img} alt="" srcset="" />
            </div>
          );
        })}
      </div>
      <div className="details_container">
        <div className="description">
          <h1>Details</h1>
          <p>{room.description}</p>
        </div>
        <div className="info">
          <h1>Info</h1>
          <h6>price : {room.price}$</h6>
          <h6>size : {room.size}</h6>
          <h6>
            max capacity :
            {room.capacity > 1
              ? `${room.capacity} people`
              : `${room.capacity} person`}
          </h6>
          <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
          <h6>{room.breakfast && "free breakfast included"}</h6>
        </div>
      </div>
      <div className="extra_container">
        <h1>Extra</h1>
        {room.extras.map((item, index) => {
          return (
            <div className="extra" key={index}>
              <p>-{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleRoom;
