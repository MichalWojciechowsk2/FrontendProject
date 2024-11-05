import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import AppContext from "../data/AppContext";

const FlexContainer = ({ element: Element }) => {
  // const { items, dispatch } = useContext(AppContext);
  const context = useContext(AppContext);
  const items = context.items;
  return (
    <div className="d-flex flex-wrap">
      {items.map((car) => (
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
