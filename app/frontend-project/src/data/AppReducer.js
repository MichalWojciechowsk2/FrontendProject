export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_OBJECT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "UPDATE_OBJECT":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case "rate": {
      return state.map((car) =>
        car.id === action.id ? { ...car, rating: action.rating } : car
      );
    }
    case "DELETE_OBJECT": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    default:
      return state;
  }
}
