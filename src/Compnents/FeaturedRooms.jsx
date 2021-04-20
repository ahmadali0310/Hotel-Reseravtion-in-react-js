import React, { useState } from "react";
import { useSelector } from "react-redux";
import Line from "./Line";
import Room from "./Room";
import Title from "./Title";

const FeaturedRooms = () => {
  const state = useSelector((state) => state);

  const featuredRooms = state.filter((item) => {
    return item.featured === true;
  });

  const [featured] = useState(featuredRooms);
  return (
    <div className="featured_rooms">
      <Title title={"Featured Rooms"} />
      <Line />
      <div className="rooms_container">
        {featured.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
