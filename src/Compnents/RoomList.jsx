import React from "react";
import Title from "./Title";
import Line from "./Line";
import Room from "./Room";

const RoomList = (props) => {
  return (
    <div>
      <div className="room_list">
        <Title title={"All Rooms"} />
        <Line />
        <div className="rooms_container">
          {props.rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomList;
