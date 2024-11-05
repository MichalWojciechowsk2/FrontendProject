import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FlexContainer from "../components/FlexContainer";
import CarProfile from "../components/CarProfile";
import { Button } from "react-bootstrap";
import AppContext from "../data/AppContext";

const Lab4 = () => {
  const navigate = useNavigate();
  const { items } = useContext(AppContext);

  const handleAddClick = () => {
    navigate("/lab4/add");
  };

  return (
    <div>
      <h2>Lab04</h2>
      <Button onClick={handleAddClick} className="mb-3">
        Add CarProfile
      </Button>
      <FlexContainer element={CarProfile} data={items} />
    </div>
  );
};

export default Lab4;
