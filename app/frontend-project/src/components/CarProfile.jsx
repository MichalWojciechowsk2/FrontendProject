import React from "react";
// import { useState } from "react";
import RatingBar from "./RatingBar";
import AppReducer from "../data/AppReducer";

const CarProfile = ({ car, dispatch }) => {
  // const [rating, setRating] = useState(car.rating);

  // const handleRateClick = () => {
  //   if (rating == 10) {
  //     setRating(0);
  //     console.log("res");
  //   } else {
  //     console.log("+1");
  //     setRating(rating + 1);
  //   }
  // };

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
      <div>
        <RatingBar rate={car.rating} />
      </div>
      <div className="d-flex justify-content-between">
        <div
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "edit",
              id: id,
            });
          }}
        >
          Edit
        </div>
        <div
          className="btn btn-danger"
          onClick={() => {
            dispatch({
              type: "delete",
              id: car.id,
            });
          }}
        >
          Delete
        </div>
        <div
          className="btn btn-warning"
          onClick={() => {
            dispatch({
              type: "rate",
              id: car.id,
              rating: car.rating === 10 ? 0 : car.rating + 1,
            });
          }}
        >
          Rate
        </div>
      </div>
    </div>
  );
};

export default CarProfile;
