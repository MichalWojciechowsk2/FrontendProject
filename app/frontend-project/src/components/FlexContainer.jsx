import React from "react";
import { Card } from "react-bootstrap"; // Dodano import komponentu Card

const FlexContainer = ({ element: Element, data }) => {
  return (
    <div className="d-flex flex-wrap">
      {data.map((car) => (
        <Card
          style={{ width: `18rem` }}
          className="border mb-3 p-3 ms-3"
          key={car.id}
        >
          <Element car={car} />
        </Card>
      ))}
    </div>
  );
};

export default FlexContainer;
