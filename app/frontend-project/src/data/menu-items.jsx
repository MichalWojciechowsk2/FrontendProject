import Home from "../pages/Home.jsx";
import Lab1 from "../pages/Lab1.jsx";
import Lab2 from "../pages/Lab2.jsx";

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home></Home>,
  },
  {
    id: 2,
    label: "Labolatorium1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1></Lab1>,
  },
  {
    id: 3,
    label: "Labolatorium2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2></Lab2>,
  },
];

export default menuItems;
