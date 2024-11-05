import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import AppContext from "../data/AppContext";

const FlexContainer = ({ element: Element }) => {
  const { items } = useContext(AppContext);

  return (
    <div className="d-flex flex-wrap">
      {items && items.length > 0 ? (
        items.map((car) => (
          <Card
            style={{ width: `18rem` }}
            className="border mb-3 p-3 ms-3"
            key={car.id}
          >
            <Element car={car} />
          </Card>
        ))
      ) : (
        <div className="text-center">No cars available.</div>
      )}
    </div>
  );
};

export default FlexContainer;
