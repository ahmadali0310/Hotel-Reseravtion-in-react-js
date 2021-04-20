import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Line from "./Line";
import Title from "./Title";

const Services = () => {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info:
        "Lorem ipsum dolor sit, amet consectetur r sit, ectetur adipis  Lorem ipsum dolor sit, amet consectetur adipis Lorem ipsum dolor sit, amet consectetur adipis ",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor sit, amet consectetur adipis Lt consectetur adipis  Lorem ipsum dolor sit, amet consectetur adipis Lorem ipsum dolor sit, amet consectetur adipis ",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "Lorem ipsum dolor sit, amet consectetur adipis Lorem ipamet cadipis  Lorem ipsum dolor sit, amet consectetur adipis Lorem ipsum dolor sit, amet consectetur adipis",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Lorem ipsum dolor sit, amet consectetuorem ipsum consectetur adipis  Lorem ipsum dolor sit, amet consectetur adipis Lorem ipsum dolor sit, amet consectetur adipis",
    },
  ]);
  return (
    <div className="services">
      <Title title={"Services"}></Title>
      <Line />
      <div className="services_center">
        {services.map((item) => {
          return (
            <div key={item.title} className="services_center_item">
              {item.icon}
              <h1>{item.title}</h1>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
