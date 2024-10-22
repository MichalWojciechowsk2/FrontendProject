import React from "react";
import { useState } from "react";
import RatingBar from "./RatingBar";

const CarProfile = ({ car, onEdit, onDelete }) => {
  const [rating, setRating] = useState(car.rating);

  const handleRateClick = () => {
    if (rating == 10) {
      setRating(0);
      console.log("res");
    } else {
      console.log("+1");
      setRating(rating + 1);
    }
  };

  return (
    <div className="car-profile border p-3 mb-3">
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
      <p>
        <RatingBar rate={rating} />
      </p>
      <div className="d-flex justify-content-between">
        <div className="btn btn-primary" onClick={() => onEdit(car.id)}>
          Edit
        </div>
        <div className="btn btn-danger" onClick={() => onDelete(car.id)}>
          Delete
        </div>
        <div className="btn btn-warning" onClick={handleRateClick}>
          Rate
        </div>
      </div>
    </div>
  );
};

export default CarProfile;
