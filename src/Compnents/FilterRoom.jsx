import React from "react";
import useType from "../Hooks/useType";
import { useSelector } from "react-redux";
import useCapacity from "../Hooks/useCapacity";
import Title from "./Title";
import Line from "./Line";

const FilterRoom = (props) => {
  const data = useSelector((state) => state);

  const [types] = useType(data);
  const [capacity] = useCapacity(data);
  return (
    <div className="filter">
      <Title title={"Search"} />
      <Line />
      <div className="input_container">
        <div className="input">
          <div>
            <label htmlFor="type">Room Type</label>
            <select onChange={(e) => props.filterByType(e)} name="" id="type">
              <option value="all">All</option>
              {types.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="input">
          <div>
            <label htmlFor="#capacity">Room Capacity</label>
            <select
              onChange={(e) => props.filterByCapacity(e)}
              name=""
              id="capacity"
            >
              <option value="all">All</option>
              {capacity.map((cap, index) => {
                return (
                  <option key={index} value={cap}>
                    {cap}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterRoom;
