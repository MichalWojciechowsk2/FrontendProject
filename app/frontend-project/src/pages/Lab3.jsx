import React from "react";
import FlexContainer from "../components/FlexContainer";
import CarProfile from "../components/CarProfile";
import { data } from "../data/module-data.jsx";

const Lab3 = () => {
  return (
    <div>
      <h2>Lab03</h2>
      <FlexContainer element={CarProfile} data={data} />
    </div>
  );
};

export default Lab3;
