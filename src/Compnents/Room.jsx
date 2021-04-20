import React from "react";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  return (
    <div className="room">
      <div className="img_container">
        <img src={room.images[0]} alt={room.slug} />
        <div className="price">
          <p>{room.price}$</p>
        </div>
        <div className="hover">
          <Link className="btn_primary__room" to={`/rooms/${room.slug}`}>
            Features
          </Link>
        </div>
      </div>
      <div className="room_name">
        <p>{room.name}</p>
      </div>
    </div>
  );
};

export default Room;
