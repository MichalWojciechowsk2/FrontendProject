import React from "react";
import { data } from "../data/module-data.jsx";
import CarProfile from "../components/CarProfile";
import { useParams } from "react-router-dom";

const Lab2 = () => {
  const { id } = useParams();

  if (!id) {
    return <h1>Car profile</h1>;
  }
  const carId = Number(id);

  if (isNaN(carId)) {
    return <h2>Car id does not exist</h2>;
  }

  const car = data.find((c) => c.id === carId);

  if (!car) {
    return <h2>Car with ID {id} not found.</h2>;
  }

  return (
    <div>
      <h1>Car profile</h1>
      <CarProfile car={car} />
    </div>
  );
};

export default Lab2;
