import React from "react";
import CarProfile from "../components/CarProfile.jsx";
import { data } from "../data/module-data.jsx";

const Lab1 = () => {
  return (
    <div>
      <h1>Car profile's list</h1>
      {data.map((car) => (
        <CarProfile key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Lab1;
