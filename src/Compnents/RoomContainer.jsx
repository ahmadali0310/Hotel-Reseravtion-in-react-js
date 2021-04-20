import React from "react";
import FilterRoom from "./FilterRoom";
import RoomList from "./RoomList";
import { useSelector } from "react-redux";
import { useState } from "react";

const RoomContainer = () => {
  const data = useSelector((state) => state);
  const [rooms, setRooms] = useState(data);

  const filterByType = (e) => {
    if (e.target.value === "all") {
      setRooms(data);
    } else {
      const filterRooms = data.filter((room) => {
        if (document.querySelector("#capacity").value === "all") {
          return room.type === e.target.value;
        } else {
          return (
            room.capacity ===
              parseInt(document.querySelector("#capacity").value) &&
            room.type === e.target.value
          );
        }
      });
      setRooms(filterRooms);
    }
  };

  const filterByCapacity = (e) => {
    if (e.target.value === "all") {
      setRooms(data);
    } else {
      const filterRooms = data.filter((room) => {
        if (document.querySelector("#type").value === "all") {
          return room.capacity === parseInt(e.target.value);
        } else
          return (
            room.capacity === parseInt(e.target.value) &&
            room.type === document.querySelector("#type").value
          );
      });

      setRooms(filterRooms);
    }
  };

  return (
    <div>
      <FilterRoom
        filterByCapacity={filterByCapacity}
        filterByType={filterByType}
      />
      <RoomList rooms={rooms} />
    </div>
  );
};

export default RoomContainer;
