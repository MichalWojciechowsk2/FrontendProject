// import React, { useContext } from "react";
// import RatingBar from "./RatingBar";
// import AppContext from "../data/AppContext";
// import { useNavigate } from "react-router-dom";

// const CarProfile = ({ car }) => {
//   const { dispatch } = useContext(AppContext);
//   const navigate = useNavigate();
//   // const context = useContext(AppContext);
//   // const dispatch = context.dispatch;

//   return (
//     <div className="car-profile border p-3 mb-3">
//       <p>
//         <strong>ID: </strong>
//         {car.id}
//       </p>
//       <p>
//         <strong>Brand: </strong>
//         {car.brand}
//       </p>
//       <p>
//         <strong>Production Date: </strong>
//         {car.productionDate}
//       </p>
//       <p>
//         <strong>Plate: </strong>
//         {car.plate}
//       </p>
//       <p>
//         <strong>Color: </strong>
//         {car.color}
//       </p>
//       <div>
//         <RatingBar rate={car.rating} />
//       </div>
//       <div className="d-flex justify-content-between">
//         <div
//           className="btn btn-primary"
//           onClick={() => {
//             // dispatch({
//             //   type: "edit",
//             //   id: car.id,
//             // });
//             navigate(`/lab4/edit/${car.id}`);
//           }}
//         >
//           Edit
//         </div>
//         <div
//           className="btn btn-danger"
//           onClick={() => {
//             dispatch({
//               type: "delete",
//               id: car.id,
//             });
//           }}
//         >
//           Delete
//         </div>
//         <div
//           className="btn btn-warning"
//           onClick={() => {
//             dispatch({
//               type: "rate",
//               id: car.id,
//               rating: car.rating === 10 ? 0 : car.rating + 1,
//             });
//           }}
//         >
//           Rate
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarProfile;

import React, { useContext } from "react";
import RatingBar from "./RatingBar";
import AppContext from "../data/AppContext";
import { useNavigate } from "react-router-dom";

const CarProfile = ({ car }) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );
    if (confirmDelete) {
      dispatch({
        type: "DELETE_OBJECT",
        id: car.id,
      });
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
      <div>
        <RatingBar rate={car.rating} />
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/lab4/edit/${car.id}`)}
        >
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default CarProfile;
