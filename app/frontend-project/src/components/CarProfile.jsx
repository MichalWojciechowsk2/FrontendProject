import React from "react";

const CarProfile = ({ car }) => {
  return (
    <div className="car-profile">
      <h2>-----------</h2>
      <p>
        <strong>ID: </strong>
        {car.id}
      </p>
      <p>
        <strong>Brand: </strong>
        {car.brand}
      </p>
      <p>
        <strong>Production Date: </strong>
        {car.productionDate}
      </p>
      <p>
        <strong>Plate: </strong>
        {car.plate}
      </p>
      <p>
        <strong>Color: </strong>
        {car.color}
      </p>
    </div>
  );
};

export default CarProfile;
