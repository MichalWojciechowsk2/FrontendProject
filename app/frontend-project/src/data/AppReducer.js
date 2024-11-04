export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_OBJECT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "edit":
      return state;
    case "rate": {
      return state.map((car) =>
        car.id === action.id ? { ...car, rating: action.rating } : car
      );
    }
    case "delete": {
      return state.filter((car) => car.id !== action.id);
    }
    default:
      return state;
  }
}
