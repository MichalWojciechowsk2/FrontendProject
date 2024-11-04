import React, { useContext, useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import AppContext from "../data/AppContext";

const AddObjectForm = () => {
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);
  const { dispatch, items } = useContext(AppContext);

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setErrors([]);

    for (let [key, value] of data.entries()) {
      if (!value) {
        setErrors((prev) => [...prev, `${key} is required`]);
        return;
      }
    }

    setSending(true);

    const newId =
      items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;

    const newObject = {
      id: newId,
      brand: data.get("brand"),
      productionDate: data.get("productionDate"),
      plate: data.get("plate"),
      color: data.get("color"),
      rating: Number(data.get("rating")),
    };

    dispatch({ type: "ADD_OBJECT", payload: newObject });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);

    e.target.reset();
  };

  return (
    <Container>
      <h1>Add new object</h1>
      <div className="text-danger">
        {errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
      <Form onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="brand">Brand</Form.Label>
          <FormControl
            required
            id="brand"
            name="brand"
            placeholder="Enter brand"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="productionDate">Production date</Form.Label>
          <FormControl
            required
            type="date"
            id="productionDate"
            name="productionDate"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="plate">Number plate</Form.Label>
          <FormControl
            required
            id="plate"
            name="plate"
            placeholder="Enter number plate"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="color">Color</Form.Label>
          <FormControl
            required
            id="color"
            name="color"
            placeholder="Enter color"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rating">Rating</Form.Label>
          <FormControl
            required
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="10"
            placeholder="Enter rating (0-10)"
          />
        </Form.Group>
        <Button disabled={isSending} type="submit" variant="primary">
          Add object
        </Button>
      </Form>
    </Container>
  );
};

export default AddObjectForm;
