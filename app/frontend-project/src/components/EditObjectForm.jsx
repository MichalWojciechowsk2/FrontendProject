import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import AppContext from "../data/AppContext";

const EditObjectForm = () => {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    const foundCar = items.find((item) => item.id === parseInt(id));
    if (foundCar) {
      setValue("brand", foundCar.brand);
      setValue("productionDate", foundCar.productionDate);
      setValue("plate", foundCar.plate);
      setValue("color", foundCar.color);
      setValue("rating", foundCar.rating);
    }
  }, [id, items, setValue]);

  const onSubmit = (data) => {
    console.log("Updating object with data:", data);

    dispatch({
      type: "UPDATE_OBJECT",
      payload: { id: parseInt(id), ...data },
    });
    navigate("/lab4");
  };

  return (
    <Container>
      <h1>Edit Object</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="brand">Brand</Form.Label>
          <Form.Control
            {...register("brand", { required: "Brand is required" })}
            id="brand"
            placeholder="Enter brand"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="productionDate">Production Date</Form.Label>
          <Form.Control
            {...register("productionDate", {
              required: "Production date is required",
            })}
            type="date"
            id="productionDate"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="plate">Number Plate</Form.Label>
          <Form.Control
            {...register("plate", { required: "Plate is required" })}
            id="plate"
            placeholder="Enter number plate"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="color">Color</Form.Label>
          <Form.Control
            {...register("color", { required: "Color is required" })}
            id="color"
            placeholder="Enter color"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rating">Rating</Form.Label>
          <Form.Control
            {...register("rating", {
              required: "Rating is required",
              min: 0,
              max: 10,
            })}
            type="number"
            id="rating"
            placeholder="Enter rating (0-10)"
            min="0"
            max="10"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Update Object
        </Button>
      </Form>
    </Container>
  );
};

export default EditObjectForm;
