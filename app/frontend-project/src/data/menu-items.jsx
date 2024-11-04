import Home from "../pages/Home.jsx";
import Lab1 from "../pages/Lab1.jsx";
import Lab2 from "../pages/Lab2.jsx";
import Lab3 from "../pages/Lab3.jsx";
import AddObjectForm from "../components/AddObjectForm.jsx";

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
  {
    id: 4,
    label: "Labolatorium3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3></Lab3>,
  },
  {
    id: 5,
    label: "Labolatorium4(Add object)",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <AddObjectForm></AddObjectForm>,
  },
];

export default menuItems;
